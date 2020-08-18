import React from 'react';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function EventCard() {
  return (
    <>
      <div className={ComponentStyles.event_card_container}>
        <img alt="" src="/assets/banner2.png" className={ComponentStyles.event_card_img} />
        <section className={ComponentStyles.event_card_info_container}>
          <span id={ComponentStyles.event_item} className="typography_spartacus_three_bold">San Francisco Blockchain Week</span>
          <span id={ComponentStyles.event_item} className="typography_spartacus_thirteen_demi_bold">August 6-10, 2020</span>
          <span id={ComponentStyles.event_item} className="typography_spartacus_six">TECH, BLOCKCHAIN</span>
          <p id={ComponentStyles.event_item} className={`typography_spartacus_seven ${ComponentStyles.event_copy}`}>
            SF Blockchain Week is where blockchain startups, enterprise companies,
            academics, developers, and investors from around the world come together
            to define the future of blockchain and cryptocurrencies.
          </p>
          <span>
            <EventIcon image="/assets/icon-paid.png" height="0.9em" width="8px" marginRight="4px" />
            <EventIcon image="/assets/icon-paid.png" height="0.9em" width="8px" marginRight="4px" />
            |
            <span className={`${ComponentStyles.event_type} typography_spartacus_ten_italic `}>Virtual Events</span>
          </span>
        </section>
        <button className={`button_med_styled ${ComponentStyles.button}`} type="button">
          Learn More
        </button>
        {/* <hr className={ComponentStyles.event_hr_mobile} /> */}

      </div>
      <hr className={ComponentStyles.event_hr} />

    </>
  );
}
