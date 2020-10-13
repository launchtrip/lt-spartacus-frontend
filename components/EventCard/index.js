import React from 'react';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import { renderIcon, renderDates } from '../helperFunctions';

export default function EventCard({ showLine, event, showDate }) {
  const pathname = `/event/${event.name.replace('/', '-').split(' ').join('-')}-id-${event.id}`;
  const renderSubs = () => {
    const selectSubs = event.subindustries ? event.subindustries : event.subindustry;
    const { length } = event.subindustries ? event.subindustries : event.subindustry;
    const subs = selectSubs && selectSubs.map((sub, i) => {
      if (i + 1 === length) {
        return <span key={sub.id}>{sub.description}</span>;
      }
      return <span key={sub.id}>{sub.description}, </span>;
    });
    return subs;
  };
  const image = event.logo && <img alt={event.name} src={event.logo.url ? event.logo.url : event.logo} className={ComponentStyles.event_card_img} />;

  return (
    <>
      <Link href={pathname}>
        <div className={ComponentStyles.event_card_container}>
          {image}
          <section className={ComponentStyles.event_card_info_container}>
            <span id={ComponentStyles.event_item} className="typography_spartacus_three_bold">{event.name}</span>
            {showDate &&
              <span
                id={ComponentStyles.event_item}
                className="typography_spartacus_thirteen_demi_bold"
              >
                {renderDates(event.dateStart, event.dateEnd)}
              </span>}
            <span id={ComponentStyles.event_item} className="typography_spartacus_six">{renderSubs()}</span>
            <p id={ComponentStyles.event_item} className={`typography_spartacus_seven ${ComponentStyles.event_copy}`}>
              {event.description}
            </p>
            <span>
              {event.badges && event.badges.map((badge) => <span key={badge.id}> {renderIcon(badge.description)} </span>)}
              |
              <span className={`${ComponentStyles.event_type} typography_spartacus_ten_italic `}>
                {event.type === 'InPerson' ? 'In-Person' : event.type}
              </span>
            </span>
          </section>
          <Link href={pathname}>
            <button className={`button_med_styled ${ComponentStyles.button}`} type="button">
              Learn More
            </button>

          </Link>
        </div>
      </Link>

      {showLine && <hr className={ComponentStyles.event_hr} />}

    </>
  );
}
