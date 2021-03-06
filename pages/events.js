import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, EventSearchPage, Error, HeadMeta } from '../components';
import { FetchAllEvents } from './api/Routes/Events';
import { organizeEventsByMonth } from '../components/helperFunctions';
import syncDMP from '../utils/knight';

export default function Events({ data }) {
  const [eventPageData, setEventPageData] = useState(data);
  const [searchError, setSearchError] = useState(undefined);
  const [state, setState] = useState({
    dateStart: '',
    dateEnd: '',
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
          reason: 'This industry currently has no events. Try again soon.',
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
      type: 4,
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

export const getServerSideProps = async ({ req }) => {
  try {
    syncDMP(req, false);
    const data = {
      dateStart: '',
      dateEnd: ''
    };
    const events = await FetchAllEvents(data);
    const results = organizeEventsByMonth(events);
    return { props: { data: results } };
  } catch (error) {
    return { props: { data: undefined } };
  }
};
