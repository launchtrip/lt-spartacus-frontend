import React from 'react';
import { BaseContainer, EventPage } from '../../components';

export default function Events() {
  return (
    <BaseContainer page="Bob Dylan">
      <EventPage premier />
    </BaseContainer>
  );
}

export const getServerSideProps = async (props) => {
  console.log(props.query);
  console.log(props.params);
  return { props: { hey: 'ho' } };
};
