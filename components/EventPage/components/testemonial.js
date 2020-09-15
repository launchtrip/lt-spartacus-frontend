import React from 'react';
import ComponentStyles from '../style/styles.module.css';

export default function Testemonials({ event }) {
  return (
    <>
      <section className={ComponentStyles.event_page_testemonials}>
        <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Testemonials</span>
        <div className={ComponentStyles.event_page_testemonials_inner}>
          {event.testimonials.map((t) =>
            <p key={t} className={`${ComponentStyles.event_page_testemonial}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
              nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              <p>- Jane Doe</p>
            </p>
          )}
        </div>
      </section>
      <hr />

    </>
  );
}
