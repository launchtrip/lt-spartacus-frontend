import React from 'react';
import moment from 'moment';
import { BaseContainer, EventSearchPage } from '../components';
import { FetchAllEvents } from './api/Routes';
import { organizeEventsByMonth } from '../components/helperFunctions';

export default function Events({ data }) {
  if (!data) {
    return <div>hey</div>;
  }
  console.log(data);
  return (
    <BaseContainer page="Events">
      <EventSearchPage data={data} />
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
    return { props: { data: null } };
  }
};
