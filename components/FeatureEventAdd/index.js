/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import ComponentStyles from './style/styles.module.css';

export default function FeatureEventAd() {
  return (
    <div className={ComponentStyles.eventAd}>
      <h1 className={`${ComponentStyles.title} typography_spartacus_eight`}>Feature Your Event</h1>
      <p className={`${ComponentStyles.copy} typography_spartacus_four`}>
        Join the assembly of the world&apos;s industry leading events.
      </p>
      <Link href="/partnerships">
        <a href="partnerships" className={`${ComponentStyles.button} button_small_styled`}>Submit Event</a>
      </Link>
    </div>
  );
}
