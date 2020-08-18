import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function SpeakerCard() {
  return (
    <div className={ComponentStyles.container}>
      <img alt="" src="/assets/arlene.png" className={ComponentStyles.speaker_image} />
      <span className="typography_spartacus_three_bold">Arlene Dickinson </span>
      <span className={`typography_spartacus_ten_italic ${ComponentStyles.description}`}>General Partner at District Ventures</span>
      <span
        className={`typography_spartacus_nine ${ComponentStyles.event}`}
      >Speaking at <span className={`${ComponentStyles.event_title}`}>Miami VR Summit</span>
      </span>
    </div>
  );
}
