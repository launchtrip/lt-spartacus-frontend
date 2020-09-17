import React from 'react';
import ComponentStyles from '../style/styles.module.css';

export default function Testemonials({ event }) {
  return (
    <>
      <section className={ComponentStyles.event_page_testemonials}>
        <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Testemonials</span>
        <div className={ComponentStyles.event_page_testemonials_inner}>
          {event.testimonials.map((t) =>
            <section key={t} className={ComponentStyles.event_page_testemonial}>
              <p className={ComponentStyles.event_page_testemonial_copy}>{t.description}</p>
              <p>- {t.author}</p>
            </section>
          )}
        </div>
      </section>
      <hr />

    </>
  );
}
