import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function AboutPage() {
  return (
    <div className={ComponentStyles.about_container}>
      <p className={`${ComponentStyles.about_paragraph} typography_spartacus_four`}>
        Unify was created to ensure that all major events, both physical and virtual are
        accessible to attendees. Our goal is to elevate the end-to-end attendee experience
        by providing perks and updates for attendees and by introducing exciting
        new in-person and virtual corporate events that span across 100 different industries.
        Unify is designing and building innovative tools to help events work together and to
        help them deliver the best experience possible.
      </p>
      <p className={`${ComponentStyles.about_paragraph} typography_spartacus_four`}>
        Unify is a platform that can ensure that small and large companies alike have the ability
        to continue to survive and grow through the most unprecedented times. We provide aid and
        assistance to event-hosts in adjusting to the new normal. We will continue to empower
        professionals to work together for today and into the future. We’re here to help.
      </p>
    </div>
  );
}
