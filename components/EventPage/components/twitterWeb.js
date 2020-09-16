import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import Twitter from '../../Twitter';

export default function TwitterWeb({ twitterName }) {
  return (
    <section className={ComponentStyles.event_page_section_two_twitter}>
      <Twitter name={twitterName} size={400} />
    </section>
  );
}
