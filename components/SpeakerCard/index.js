/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';

export default function SpeakerCard({ hideEventTitle, data }) {
  const pathname = hideEventTitle ? null : `/event/${data.event.name.replace('/', '-').split(' ').join('-')}-id-${data.event.id}`;

  return (
    <div className={ComponentStyles.container}>
      <img alt="" src={data.image.url ? data.image.url : data.image} className={ComponentStyles.speaker_image} />
      <span className="typography_spartacus_three_bold">{data.name}</span>
      <span className={`typography_spartacus_ten_italic ${ComponentStyles.description}`}>{data.title} at {data.company.name}</span>
      {!hideEventTitle &&
      <span
        className={`typography_spartacus_nine ${ComponentStyles.event}`}
      >Speaking at <Link href={pathname}>
        <a href={pathname}>
          <span className={`${ComponentStyles.event_title}`}>
            {data.event.name}
          </span>
        </a>
      </Link>
      </span>}
    </div>
  );
}
