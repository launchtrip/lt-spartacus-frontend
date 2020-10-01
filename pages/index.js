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
  HeadMeta
} from '../components';

import { FetchHomePageData, FetchHomePageDataById } from './api/Routes/Events';

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
      console.log(error);
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
  return (
    <BaseContainer page="Home">
      <HeadMeta />
      <div classNameName="home_sec_base_container">
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
    // <div>
    //   <div className="section1">
    //     <img src="/assets/bgtop.png" className="splash" />
    //     <div className="section1__container flex">
    //       <div className="flex">
    //         <h1 className="logo">Unify. </h1>
    //         <span className="tag">An Assembly of Leading Industry Events</span>
    //       </div>
    //       <div className="screenContainer" style={{ alignSelf: "flex-end" }}>
    //         <span className="url">www.unifyhybrid.com</span>
    //         <img src="screenshot.gif" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="section2">
    //     <h2>Launching October 2020</h2>
    //   </div>
    //   <div className="section3">
    //     <div className="section1__container">
    //       <div className="section3__container">
    //         <h3>We build amazing tools to help events grow. </h3>
    //         <p>We’ve been busy designing and building innovative tools to help events continue to thrive and grow for years
    //         to
    //         come.
    //         Our goal is help events supplement
    //         traditional sales with digital solutions
    //       to increases their bottom line.</p>
    //         <p>Launching October 2020.</p>
    //       </div>
    //     </div>
    //   </div>
    // </div >
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
