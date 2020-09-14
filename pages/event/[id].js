import React from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, EventPage, Error } from '../../components';
import { FetchIndividualEvent } from '../api/Routes';

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
  console.log(data);
  return (
    <BaseContainer page="Bob Dylan">
      <EventPage premier />
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
    console.log(event);
    return { props: { data: event } };
  } catch (error) {
    return { props: { data: null } };
  }
};
