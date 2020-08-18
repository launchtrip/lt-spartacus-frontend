import React from 'react';
import { BaseContainer, DynamicSearchBar, EventCarousel } from '../components';

export default function VirtualEvents() {
  return (
    <BaseContainer page="Virtual Events">
      <DynamicSearchBar />
      <EventCarousel title="Spotlight" eventPage />
      <EventCarousel title="Blockchain" eventPage />
      <EventCarousel title="Elevate" eventPage />
      <EventCarousel title="CI/CD" eventPage />
    </BaseContainer>
  );
}
