/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import { countdownInDays, renderIcon } from '../helperFunctions';

export default function EventCard({ data }) {
  const pathname = `/event/${data.name.split(' ').join('-')}`;
  return (
    <Link
      href={{ pathname }}
    >
      <div className={ComponentStyles.card_container}>
        <section className={ComponentStyles.card_container_section_one}>
          <img
            src={data.logo}
            alt=""
            className={ComponentStyles.card_container_section_one_image}
          />
        </section>
        <section className={ComponentStyles.card_container_section_two}>
          <span
            id={ComponentStyles.section_two_event_item}
            className="typography_spartacus_four"
          >LIVE: <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_four_bold">{countdownInDays(data.dateStart, true)} DAYS</span>
          </span>
          <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_five_demi_bold">{data.name}</span>
          <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_six">
            {data.subindustry && data.subindustry.map((sub, i) => {
              const { length } = data.subindustry;
              if (i + 1 === length) {
                return sub.description;
              }
              return `${sub.description}, `;
            })}
          </span>
          <span id={ComponentStyles.section_two_event_item} className={`typography_spartacus_seven ${ComponentStyles.card_copy}`}>
            {data.description}
          </span>
          <section id={ComponentStyles.section_two_event_item} className={ComponentStyles.section_two_image_container}>
            {data.badges && data.badges.map((badge) => renderIcon(badge.description))}
          </section>
        </section>
      </div>
    </Link>
  );
}
