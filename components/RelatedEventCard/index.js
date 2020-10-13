import React from 'react';
import moment from 'moment';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import { renderIcon } from '../helperFunctions';

export default function RelatedEventCard({ event }) {
  const allMonths = moment.months();
  const pathname = `/event/${event.name.replace('/', '-').split(' ').join('-')}-id-${event.id}`;

  return (
    <Link href={pathname}>
      <div className={ComponentStyles.related_card_container}>
        <img src={event.logo.url} alt="" className={ComponentStyles.related_card_img} />
        <span id={ComponentStyles.related_card_item} className="typography_spartacus_two_bold">{event.name}</span>
        <span id={ComponentStyles.related_card_item} className="typography_spartacus_nine_demi_bold">
          {allMonths[new Date(event.dateStart).getMonth()]} {moment(event.dateStart).format('Do')}, {new Date(event.dateStart).getFullYear()}
        </span>
        <span id={ComponentStyles.related_card_item} className="typography_spartacus_six">{event.industry.description}</span>
        <span id={ComponentStyles.related_card_item} className={`typography_spartacus_twelve_light ${ComponentStyles.related_card_info}`}>
          {event.description}
        </span>
        <span id={ComponentStyles.related_card_item}>
          {event.badges && event.badges.map((badge) => renderIcon(badge.description))}
          |
          <span className="typography_spartacus_fifteen_italic"> {event.type === 'InPerson' ? 'In Person' : event.type}</span>
        </span>
      </div>
    </Link>
  );
}
