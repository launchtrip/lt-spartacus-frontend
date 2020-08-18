import React from 'react';
import {
  BaseContainer,
  DynamicSearchBar,
  EventCarousel,
  HeroCarousel,
  MobileCopy
} from '../components';

export default function Home() {
  return (
    <BaseContainer page="Home">
      <div className="home_sec_base_container">
        <DynamicSearchBar />
        <MobileCopy />
        <HeroCarousel />
        <EventCarousel title="Virtual Events" arrows={false} />
      </div>

    </BaseContainer>
  );
}
