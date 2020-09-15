import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import SpeakerCarousel from '../../SpeakerCarousel';

export default function Speaker({ event }) {
  return (
    <>
      <section className={ComponentStyles.event_page_speaker_container}>
        <SpeakerCarousel title="Speakers" hideEventTitle speakers={event.speakers} />
      </section>
      <hr />

    </>
  );
}
