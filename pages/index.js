import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  BaseContainer,
  DynamicSearchBar,
  EventCarousel,
  HeroCarousel,
  HomePageBottomHalf,
  MobileCopy,
  Error,
  HeadMeta,
  // MainPoster
} from '../components';

import { FetchHomePageData, FetchHomePageDataById } from './api/Routes/Events';
import syncDMP from '../utils/knight';

export default function Home({ data }) {
  const [homePageData, setHomePageData] = useState(data);
  const [searchError, setSearchError] = useState(undefined);
  const router = useRouter();

  const updateHomePageData = async (id) => {
    try {
      const newHomePageData = await FetchHomePageDataById(id);
      setSearchError(undefined);
      setHomePageData(newHomePageData);
    } catch (error) {
      setHomePageData(undefined);
      // need to updatr this to set error if error exists or happens
    }
  };

  const refreshWithOriginalData = async () => {
    setSearchError(undefined);
    setHomePageData(data);
  };

  if (!homePageData || Object.keys(homePageData).length === 0) {
    const errorMessage = {
      type: 503,
      title: 'Something Went Wrong',
      reason: 'Service is temporarily unavailable. Please try again.',
      actionDisplay: 'Refresh Page',
      action: () => router.push('/')

    };
    return (
      <BaseContainer page="Home">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }
  const { articles, events, speakers, spotlight, virtualEvents } = homePageData;

  // if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE !== 'false') {
  //   return (
  //     <MainPoster />
  //   );
  // }

  return (
    <BaseContainer page="Home">
      <HeadMeta />
      <div className="home_sec_base_container">
        <DynamicSearchBar
          updateSearchFunction={updateHomePageData}
          refreshWithOriginalData={refreshWithOriginalData}
          setSearchError={setSearchError}
          type=""
        />
        {searchError
          ? <Error error={searchError} />
          :
          <>
            <MobileCopy />
            {spotlight.length > 0 && <HeroCarousel data={spotlight} />}
            {virtualEvents.length > 3 && <EventCarousel title="Virtual Events" data={virtualEvents} />}
            <HomePageBottomHalf articles={articles} events={events} speakers={speakers} />
          </>}

      </div>
    </BaseContainer>
  );
}
export const getServerSideProps = async ({ req }) => {
  try {
    syncDMP(req, false);
    const res = await FetchHomePageData();
    return {
      props: {
        data: res
      },
    };
  } catch (error) {
    return { props: { data: null } };
  }
};
