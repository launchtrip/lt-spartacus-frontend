import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import RelatedEventCard from '../../RelatedEventCard';

export default function RelatedEvents() {
  return (
    <section className={ComponentStyles.event_page_related_events}>
      <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Related Events</span>
      <section className={ComponentStyles.event_page_related_events_inner}>
        <RelatedEventCard />
        <RelatedEventCard />
        <RelatedEventCard />
        <RelatedEventCard />
      </section>
    </section>
  );
}
