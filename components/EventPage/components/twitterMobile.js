import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import Twitter from '../../Twitter';

export default function TwitterMobile() {
  return (
    <section className={ComponentStyles.event_page_small_screen_ghost}>
      <section className={ComponentStyles.event_page_twitter_small}>
        <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Twitter</span>
        <Twitter name="nfl" size={350} />
      </section>

    </section>

  );
}
