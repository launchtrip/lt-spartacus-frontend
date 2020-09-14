/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, DynamicSearchBar, EventCarousel, Error } from '../components';
import { FetchVirtualEventPageData, FetchVirtualPageDataById } from './api/Routes';

export default function VirtualEvents({ data }) {
  const [virtualPageData, setVirtualPageData] = useState(data);
  const [searchError, setSearchError] = useState(undefined);
  const spotlight = data.find((sub) => sub.subindustry === 'spotlight');
  const router = useRouter();

  const updateVirtualPageData = async (id) => {
    try {
      const newVirtualPageData = await FetchVirtualPageDataById(id);
      const { length } = newVirtualPageData;
      if (!length) {
        const errorMessage = {
          type: 403,
          title: 'Page Not Found',
          reason: 'This industry does not have any virtual events',
        };
        setSearchError(errorMessage);
        return;
      }
      setSearchError(undefined);
      setVirtualPageData(newVirtualPageData);
    } catch (error) {
      // need to updatr this to set error if error exists or happens
      console.log(error);
    }
  };

  const refreshWithOriginalData = async () => {
    setSearchError(undefined);
    setVirtualPageData(data);
  };

  if (!virtualPageData) {
    const errorMessage = {
      type: 503,
      title: 'Something Went Wrong',
      reason: 'Service is temporarily unavailable. Please try again.',
      actionDisplay: 'Refresh Page',
      action: router.push('/virtualevents')

    };
    return (
      <BaseContainer page="Virtual Events">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }

  return (
    <BaseContainer page="Virtual Events">
      <DynamicSearchBar
        updateSearchFunction={updateVirtualPageData}
        refreshWithOriginalData={refreshWithOriginalData}
        setSearchError={setSearchError}
        type="virtualEvents"
      />
      {searchError ?
        <Error error={searchError} />
        :
        <>
          {spotlight && <EventCarousel title="Spotlight" eventPage isLast />}
          {data && data.map((sub, i) => {
            if (sub.subindustry === 'spotlight') {
              return;
            }
            if (i + 1 === data.length) {
              return <EventCarousel title={sub.subindustry} key={sub.subindustry} eventPage data={sub.events} isLast />;
            }
            return <EventCarousel title={sub.subindustry} key={sub.subindustry} eventPage data={sub.events} />;
          })}
        </>}
    </BaseContainer>
  );
}

export const getServerSideProps = async () => {
  try {
    const res = await FetchVirtualEventPageData();
    return {
      props: {
        data: res
      },
    };
  } catch (error) {
    return { props: { data: undefined } };
  }
};
