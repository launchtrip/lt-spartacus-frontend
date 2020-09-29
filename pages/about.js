import React from 'react';
import { AboutPage, BaseContainer, HeadMeta } from '../components';

export default function About() {
  return (
    <BaseContainer page="About">
      <HeadMeta />
      <AboutPage />
    </BaseContainer>
  );
}
