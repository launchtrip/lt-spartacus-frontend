import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function Error({ error }) {
  return (
    <div className={ComponentStyles.error_contaner}>
      <section id={ComponentStyles.error_item} className="typography_spartacus_twenty_one">{error.type}</section>
      <section id={ComponentStyles.error_item} className="typography_spartacus_sixteen">{error.title}</section>
      <section id={ComponentStyles.error_item} className="typography_spartacus_seventeen_bold">{error.reason}</section>
      {error.action &&
        <button
          type="button"
          onClick={() => error.action()}
          id={ComponentStyles.error_item}
          className="button_med_styled"
        >
          {error.actionDisplay}
        </button>}
    </div>
  );
}
