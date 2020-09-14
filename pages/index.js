import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  BaseContainer,
  DynamicSearchBar,
  EventCarousel,
  HeroCarousel,
  HomePageBottomHalf,
  MobileCopy,
  Error
} from '../components';

import { FetchHomePageData, FetchHomePageDataById } from './api/Routes';

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
      // need to updatr this to set error if error exists or happens
      console.log(error);
    }
  };

  const refreshWithOriginalData = async () => {
    setSearchError(undefined);
    setHomePageData(data);
  };

  if (!homePageData) {
    const errorMessage = {
      type: 503,
      title: 'Something Went Wrong',
      reason: 'Service is temporarily unavailable. Please try again.',
      actionDisplay: 'Refresh Page',
      action: router.push('/')

    };
    return (
      <BaseContainer page="Home">
        <Error error={errorMessage} />
      </BaseContainer>
    );
  }
  const { articles, events, speakers, spotlight, virtualEvents } = homePageData;
  return (
    <BaseContainer page="Home">
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
            <HeroCarousel data={spotlight} />
            <EventCarousel title="Virtual Events" data={virtualEvents} />
            <HomePageBottomHalf articles={articles} events={events} speakers={speakers} />
          </>}

      </div>

    </BaseContainer>
  );
}
export const getServerSideProps = async () => {
  try {
    const res = await FetchHomePageData();
    return {
      props: {
        data: res
      },
    };
  } catch (error) {
    return { props: { data: undefined } };
  }
};
