/* eslint-disable max-len */
import React from 'react';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import { countdownInDays, renderIcon } from '../helperFunctions';

export default function EventCard({ data }) {
  console.log(data);
  const pathname = `/event/${data.name.replace('/', '-').split(' ').join('-')}-id-${data.id}`;
  const oldEvent = new Date() > new Date(data.dateEnd);
  const renderCorrectCoundown = () => {
    const countdown = countdownInDays(data.dateStart, true);
    if (oldEvent) {
      return 'Completed';
    }
    if (new Date(data.dateStart) < new Date()) {
      return 'Today';
    }

    if (countdown === 1) {
      return '1 Day';
    }
    if (countdown < 1) {
      return 'Today';
    }
    return `${countdown} Days`;
  };

  const imageUrl = (logo) => {
    if (!logo) {
      return '/assets/logo.png';
    }
    if (data.logo.url) {
      return data.logo.url;
    }
    return data.logo;
  };
  return (
    <Link
      href={{ pathname }}
    >
      <div className={ComponentStyles.card_container}>
        <section className={ComponentStyles.card_container_section_one}>
          <img
            src={imageUrl(data.logo)}
            alt=""
            className={ComponentStyles.card_container_section_one_image}
          />
        </section>
        <section className={ComponentStyles.card_container_section_two}>
          <span
            id={ComponentStyles.section_two_event_item}
            className="typography_spartacus_four"
          >{oldEvent ? null : 'LIVE:'} <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_four_bold">{renderCorrectCoundown()}</span>
          </span>
          <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_five_demi_bold">{data.name}</span>
          <span id={ComponentStyles.section_two_event_item} className="typography_spartacus_six">
            {data.industry && data.industry.description && data.subindustry.length > 0 && `${data.industry.description}, ` }
            {data.industry && data.industry.description && !data.subindustry.length && `${data.industry.description}` }
            {data.subindustry && data.subindustry.map((sub, i) => {
              const { length } = data.subindustry;
              if (i + 1 === length) {
                return <span key={sub.id}>{sub.description}</span>;
              }
              return <span key={sub.id}>{sub.description}, </span>;
            })}
          </span>
          <span id={ComponentStyles.section_two_event_item} className={`typography_spartacus_seven ${ComponentStyles.card_copy}`}>
            {data.description}
          </span>
          <section id={ComponentStyles.section_two_event_item} className={ComponentStyles.section_two_image_container}>
            {data.badges && data.badges.map((badge) => <span key={badge.id}>{renderIcon(badge.description)}</span>)}
          </section>
        </section>
      </div>
    </Link>
  );
}
