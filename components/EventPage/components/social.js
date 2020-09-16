/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import EventIcon from '../../EventIcon';

export default function Social({ event, display }) {
  const Icons = {
    facebook: <EventIcon image="/assets/facebook.png" width="30px" height="30px" marginRight="7px" marginLeft="10px" />,
    twitter: <EventIcon image="/assets/twitter.png" width="30px" height="30px" marginLeft="10px" marginRight="7px" />,
    linkedin: <EventIcon image="/assets/linkedin.png" width="30px" height="30px" marginRight="7px" marginLeft="10px" />

  };
  return (
    <div className={ComponentStyles.event_page_social_container} style={{ justifyContent: display }}>
      <span className="typography_spartacus_eight_light">Share:</span>
      {event.ShareLinks.length && event.ShareLinks.map((e) => <a href={e.url} target="_blank" key={e.id}><span>{Icons[e.links]}</span></a>)}
    </div>
  );
}
