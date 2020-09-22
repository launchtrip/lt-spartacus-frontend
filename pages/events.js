import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';
import { BaseContainer, EventSearchPage, Error, HeadMeta } from '../components';
import { FetchAllEvents } from './api/Routes/Events';
import { organizeEventsByMonth } from '../components/helperFunctions';

export default function Events({ data }) {
  const [eventPageData, setEventPageData] = useState(data);
  const [searchError, setSearchError] = useState(undefined);
  const [state, setState] = useState({
    dateStart: moment().format('YYYY-MM-DD'),
    dateEnd: moment().endOf('year').format('YYYY-MM-DD'),
  });
  const [type, setType] = useState(undefined);
  const [companyIndustryOrEvent, SetCompanyIndustryOrEvent] = useState(undefined);
  const router = useRouter();

  const updateEventPageData = async () => {
    const { dateStart, dateEnd } = state;
    const search = {
      dateStart,
      dateEnd
    };
    if (type) {
      search.type = type;
    }
    if (companyIndustryOrEvent) {
      search[companyIndustryOrEvent.type] = companyIndustryOrEvent.id;
    }
    try {
      const newEventPageData = await FetchAllEvents(search);
      const { length } = newEventPageData;
      if (!length) {
        const errorMessage = {
          type: 403,
          title: 'Page Not Found',
          reason: 'This industry does not have any events',
        };
        setSearchError(errorMessage);
        return;
      }
      setSearchError(undefined);
      const results = organizeEventsByMonth(newEventPageData);
      setEventPageData(results);
    } catch (error) {
      setEventPageData(undefined);
      // need to updatr this to set error if error exists or happens
      console.log(error);
    }
  };

  const refreshWithOriginalData = async () => {
    setSearchError(undefined);
    setEventPageData(data);
  };

  const methods = {
    setState,
    setType,
    SetCompanyIndustryOrEvent,
    updateEventPageData,
    refreshWithOriginalData,
    setSearchError,
    searchError,
    type
  };

  useEffect(() => {
    updateEventPageData();
  }, [state, type, companyIndustryOrEvent]);

  if (!eventPageData) {
    const errorMessage = {
      type: 503,
      title: 'Something Went Wrong',
      reason: 'Service is temporarily unavailable. Please try again.',
      actionDisplay: 'Refresh Page',
      action: () => router.push('/events')

    };
    return (
      <BaseContainer page="Events">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }

  return (
    <BaseContainer page="Events">
      <HeadMeta />
      <EventSearchPage data={eventPageData} methods={methods} />
    </BaseContainer>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = {
      dateStart: moment().format('YYYY-MM-DD'),
      dateEnd: moment().endOf('year').format('YYYY-MM-DD')
    };
    const events = await FetchAllEvents(data);
    const results = organizeEventsByMonth(events);
    return { props: { data: results } };
  } catch (error) {
    return { props: { data: undefined } };
  }
};
