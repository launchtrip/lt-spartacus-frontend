import React from 'react';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function RelatedEventCard() {
  return (
    <div className={ComponentStyles.related_card_container}>
      <img src="/assets/banner1.png" alt="" className={ComponentStyles.related_card_img} />
      <span id={ComponentStyles.related_card_item} className="typography_spartacus_two_bold">Elevate</span>
      <span id={ComponentStyles.related_card_item} className="typography_spartacus_nine_demi_bold">June 3rd, 2020</span>
      <span id={ComponentStyles.related_card_item} className="typography_spartacus_six">PERSONAL DEVELOPMENT</span>
      <span id={ComponentStyles.related_card_item} className={`typography_spartacus_twelve_light ${ComponentStyles.related_card_info}`}>
        Learn from industry lea Learn from industry leaders on the future of work
      </span>
      <span id={ComponentStyles.related_card_item}>
        <EventIcon image="/assets/icon-paid.png" width="8px" height="10px" marginRight="5px" />
        <EventIcon image="/assets/icon-virtual.png" width="12px" height="10px" marginRight="5px" />
        |
        <span className="typography_spartacus_fifteen_italic"> Hybrid</span>
      </span>
    </div>
  );
}
