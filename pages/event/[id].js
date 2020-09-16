import React from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, EventPage, Error } from '../../components';
import { FetchIndividualEvent } from '../api/Routes/Events';

export default function Events({ data }) {
  const router = useRouter();

  if (!data) {
    const errorMessage = {
      type: 404,
      title: 'Page Not Found',
      reason: "The page you are looking for doesn't exist",
      actionDisplay: 'Go to Home',
      action: () => router.push('/')

    };
    return (
      <BaseContainer page="Events">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }
  return (
    <BaseContainer page={data.name}>
      <EventPage premier={data.premier} event={data} />
    </BaseContainer>
  );
}

export const getServerSideProps = async (props) => {
  const id = props.query.id.split('-id-')[1];
  if (!id) {
    return { props: { data: null } };
  }
  try {
    const event = await FetchIndividualEvent(id);
    return { props: { data: event } };
  } catch (error) {
    return { props: { data: null } };
  }
};
