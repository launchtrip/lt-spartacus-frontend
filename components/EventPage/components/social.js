/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import EventIcon from '../../EventIcon';

export default function Social({ display }) {
  return (
    <div className={ComponentStyles.event_page_social_container} style={{ justifyContent: display }}>
      <span className="typography_spartacus_eight_light">Share:</span>
      <EventIcon image="/assets/facebook.png" width="30px" height="30px" marginRight="5px" marginLeft="5px" />
      <EventIcon image="/assets/twitter.png" width="30px" height="30px" marginLeft="5px" marginRight="5px" />
      <EventIcon image="/assets/linkedin.png" width="30px" height="30px" marginRight="5px" marginLeft="5px" />
    </div>
  );
}
