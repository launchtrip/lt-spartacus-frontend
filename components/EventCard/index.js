import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import { renderIcon } from '../helperFunctions';

export default function EventCard({ showLine, event }) {
  const allMonths = moment.months();
  const startDay = moment(event.dateStart).date();
  const endDay = moment(event.dateEnd).date();
  const year = moment(event.dateEnd).year();
  const pathname = `/event/${event.name.split(' ').join('-')}`;
  const renderSubs = () => {
    const subs = event.subindustry && event.subindustry.map((sub, i) => {
      const { length } = event.subindustry;
      if (i + 1 === length) {
        return sub.description;
      }
      return `${sub.description}, `;
    });
    return subs;
  };

  return (
    <>
      <div className={ComponentStyles.event_card_container}>
        <img alt="" src={event.logo} className={ComponentStyles.event_card_img} />
        <section className={ComponentStyles.event_card_info_container}>
          <span id={ComponentStyles.event_item} className="typography_spartacus_three_bold">{event.name}</span>
          <span
            id={ComponentStyles.event_item}
            className="typography_spartacus_thirteen_demi_bold"
          >
            {allMonths[new Date(event.dateStart).getMonth()]} {startDay}-{endDay}, {year}
          </span>
          <span id={ComponentStyles.event_item} className="typography_spartacus_six">{renderSubs()}</span>
          <p id={ComponentStyles.event_item} className={`typography_spartacus_seven ${ComponentStyles.event_copy}`}>
            {event.description}
          </p>
          <span>
            {event.badges && event.badges.map((badge) => renderIcon(badge.description))}
            |
            <span className={`${ComponentStyles.event_type} typography_spartacus_ten_italic `}>
              {event.type === 'InPerson' ? 'In Person' : event.type}
            </span>
          </span>
        </section>
        <Link href={pathname}>
          <button className={`button_med_styled ${ComponentStyles.button}`} type="button">
            Learn More
          </button>

        </Link>

      </div>
      {showLine && <hr className={ComponentStyles.event_hr} />}

    </>
  );
}
