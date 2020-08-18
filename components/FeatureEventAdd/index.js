/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function FeatureEventAd() {
  return (
    <div className={ComponentStyles.eventAd}>
      <h1 className={`${ComponentStyles.title} typography_spartacus_eight`}>Feature Your Event</h1>
      <p className={`${ComponentStyles.copy} typography_spartacus_four`}>We know travel and corporate events.
        We help events succeed and we are super duper awesome.
      </p>
      <a href="#" className={`${ComponentStyles.button} button_small_styled`}>Submit Event</a>
    </div>
  );
}
