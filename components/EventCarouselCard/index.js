import React from 'react';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function EventCard() {
  return (
    <div className={ComponentStyles.card_container}>
      <section className={ComponentStyles.card_container_section_one}>
        <img
          src="/assets/banner1.png"
          alt=""
          className={ComponentStyles.card_container_section_one_image}
        />
      </section>
      <section className={ComponentStyles.card_container_section_two}>
        <span
          id={ComponentStyles.section_two_event_item}
          className="typography_spartacus_four"
        >LIVE: <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_four_bold">2 DAYS</span>
        </span>
        <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_five_demi_bold">ELEVATE</span>
        <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_six">TECH, AI</span>
        <span id={ComponentStyles.section_two_event_item} className={`typography_spartacus_seven ${ComponentStyles.card_copy}`}>
          Ai4 2020 brings together business leaders and data practitioners to facilitate…
          adoption of …artificia...l intelligence... machine learning technology. Join us at the industry’s most impactful Ai event.
        </span>
        <section id={ComponentStyles.section_two_event_item} className={ComponentStyles.section_two_image_container}>
          <EventIcon image="/assets/icon-paid.png" height="1em" width="10px" marginRight="7px" />
          <EventIcon image="/assets/icon-virtual.png" height="1em" width="15px" marginRight="7px" />
        </section>
      </section>
    </div>
  );
}
