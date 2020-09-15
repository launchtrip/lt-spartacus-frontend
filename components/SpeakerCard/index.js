import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function SpeakerCard({ hideEventTitle, data }) {
  return (
    <div className={ComponentStyles.container}>
      <img alt="" src={data.image.url ? data.image.url : data.image} className={ComponentStyles.speaker_image} />
      <span className="typography_spartacus_three_bold">{data.name}</span>
      <span className={`typography_spartacus_ten_italic ${ComponentStyles.description}`}>{data.title} at {data.company.name}</span>
      {!hideEventTitle &&
      <span
        className={`typography_spartacus_nine ${ComponentStyles.event}`}
      >Speaking at <span className={`${ComponentStyles.event_title}`}>{data.event.name}</span>
      </span>}
    </div>
  );
}
