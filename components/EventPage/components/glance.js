import React from 'react';
import ComponentStyles from '../style/styles.module.css';

export default function Glance({ event }) {
  return (
    <>
      <section className={`typography_spartacus_eight ${ComponentStyles.event_page_glance_section}`}>
        At a Glance  <hr className={ComponentStyles.event_page_glance_divider} />
      </section>

      <section className={ComponentStyles.event_page_glance_details_container}>
        {event.size > 0 &&
        <span className={`${ComponentStyles.event_page_glance_detail} typography_spartacus_four`}>Size <br />
          <span className={`${ComponentStyles.event_page_glance_detail_result} typography_spartacus_thirteen_demi_bold`}>{event.size} Attendees</span>
        </span>}
        <span
          className={`${ComponentStyles.event_page_glance_detail} typography_spartacus_four`}
        >Industry(s)<br />
          <span
            className={`${ComponentStyles.event_page_glance_detail_result} typography_spartacus_thirteen_demi_bold`}
          >
            {event.industry.description}, {event.subindustries && event.subindustries.map((sub, i) => {
              if (i + 1 === event.subindustries.length) {
                return (
                  <span key={sub.id} className={ComponentStyles.glace_sub}>
                    {sub.description}
                  </span>
                );
              }
              return (
                <span key={sub.id} className={ComponentStyles.glace_sub}>
                  {`${sub.description}, `}
                </span>
              );
            }
            )}
          </span>
        </span>
        <span
          className={`${ComponentStyles.event_page_glance_detail} typography_spartacus_four`}
        >Who Should Attend<br />
          <span
            className={`${ComponentStyles.event_page_glance_detail_result} typography_spartacus_thirteen_demi_bold`}
          >{event.attendees}
          </span>
        </span>
        <span
          className={`${ComponentStyles.event_page_glance_detail} typography_spartacus_four`}
        >In-Person or Virtual<br />
          <span
            className={`${ComponentStyles.event_page_glance_detail_result} typography_spartacus_thirteen_demi_bold`}
          >
            {event.type.toLowerCase() === 'inperson' ? 'In Person ' : `${event.type} `}
          </span>
        </span>

      </section>
      <hr className={ComponentStyles.event_page_glance_bottom} />

    </>
  );
}
