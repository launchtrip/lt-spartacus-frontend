import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
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
  const url = `${process.env.BASE_URL}/event/${data.name.split(' ').join('-')}-id-${data.id}`;

  return (
    <BaseContainer page={data.name}>
      <Head>
        {/* <meta property="og:site_name" content="Unify." />
        <meta property="fb:app_id" content="560462338187989" />
        <meta property="og:title" content={data.name} />
        <meta property="og:site_name" content="Unify." />
        <meta property="og:image" content={data.logo.url} />
        <meta property="og:updated_time" content="1589479982" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={data.slogan} />
        <meta property="og:locale" content="en_us" />
        <meta property="og:type" content="website" /> */}
      </Head>
      <EventPage premier={data.premier} event={data} />
    </BaseContainer>
  );
}

export const getServerSideProps = async (props) => {
  const id = props.req.url.replace('?', 'Q').split('-id-')[1];
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
