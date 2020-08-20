/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

import ComponentStyles from './styles.module.css';

export default function Note({ note }) {
  return (
    <div className={ComponentStyles.modal_base_container}>

      <div className={ComponentStyles.modal_container}>
        <span
          className={`typography_spartacus_seventeen_bold ${ComponentStyles.note_container}`}
        >
          {note}
        </span>
      </div>
    </div>
  );
}
