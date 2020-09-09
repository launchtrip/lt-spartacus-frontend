import React from 'react';
import { Spin } from 'antd';
import {
  BaseContainer,
  DynamicSearchBar,
  EventCarousel,
  HeroCarousel,
  HomePageBottomHalf,
  MobileCopy
} from '../components';

import { FetchHomePageData } from './api/Routes';

export default function Home({ data }) {
  if (!data) {
    return (
      <BaseContainer page="Home">
        <div className="home_sec_base_container_error">
          <Spin />
        </div>
      </BaseContainer>
    );
  }
  const { articles, events, speakers, spotlight, virtualEvents } = data;
  return (
    <BaseContainer page="Home">
      <div className="home_sec_base_container">
        <DynamicSearchBar />
        <MobileCopy />
        <HeroCarousel data={spotlight} />
        <EventCarousel title="Virtual Events" data={virtualEvents} />
        <HomePageBottomHalf articles={articles} events={events} speakers={speakers} />
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
    return { props: { data: null } };
  }
};
