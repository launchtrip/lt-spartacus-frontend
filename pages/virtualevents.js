/* eslint-disable consistent-return */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { BaseContainer, DynamicSearchBar, EventCarousel, Error, HeadMeta } from '../components';
import { FetchVirtualEventPageData, FetchVirtualPageDataById } from './api/Routes/Events';

export default function VirtualEvents({ data }) {
  const [virtualPageData, setVirtualPageData] = useState(data.filter(d => d.events.length >= 3));
  const [searchError, setSearchError] = useState(undefined);
  const spotlight = data.find((sub) => sub.subindustry === 'Spotlight');
  const router = useRouter();
  console.log(virtualPageData);

  const errorMessage = {
    type: 503,
    title: 'Something Went Wrong',
    reason: 'Service is temporarily unavailable. Please try again.',
    actionDisplay: 'Refresh Page',
    action: () => router.push('/virtualevents')

  };

  const updateVirtualPageData = async (id) => {
    try {
      const newVirtualPageData = await FetchVirtualPageDataById(id);
      const { length } = newVirtualPageData;
      if (!length) {
        const newErrorMessage = {
          type: 403,
          title: 'Page Not Found',
          reason: 'This industry does not have any virtual events',
        };
        setSearchError(newErrorMessage);
        return;
      }
      setSearchError(undefined);
      setVirtualPageData(newVirtualPageData);
    } catch (error) {
      setVirtualPageData(undefined);
      // need to updatr this to set error if error exists or happens
    }
  };

  const refreshWithOriginalData = async () => {
    setSearchError(undefined);
    setVirtualPageData(data);
  };

  if (!virtualPageData) {
    return (
      <BaseContainer page="Virtual Events">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }

  return (
    <BaseContainer page="Virtual Events">
      <HeadMeta />
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
          {spotlight && <EventCarousel title="Spotlight" eventPage data={spotlight.events} />}
          {virtualPageData && virtualPageData.map((sub, i) => {
            if (sub.subindustry === 'Spotlight') {
              return;
            }
            if (i + 2 === virtualPageData.length) {
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
