import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function Footer() {
  return (
    <div className={ComponentStyles.footer_container}>
      <section className={ComponentStyles.footer_container_one}>
        <section className={ComponentStyles.footer_container_one_inner}>
          <span>Unify.</span>
          <span className={ComponentStyles.footer_container_one_copy}>Assembly of World Leading Industy Events</span>
        </section>
      </section>
      <section className={ComponentStyles.footer_container_two}>
        <section className={ComponentStyles.footer_container_two_inner}>
          <span className="typography_spartacus_fifteen">Privacy Policy</span>
          <span className="typography_spartacus_fifteen">Terms of Service</span>
          <span className="typography_spartacus_fifteen">Launchtrip</span>
          <span className="typography_spartacus_fifteen">Contact</span>
        </section>
      </section>
      <section className={ComponentStyles.footer_container_three}>
        <img alt="facebook" src="/assets/facebook.png" className={ComponentStyles.footer_img} />
        <img alt="linkedin" src="/assets/linkedin.png" className={ComponentStyles.footer_img} />
        <img alt="twitter" src="/assets/twitter.png" className={ComponentStyles.footer_img} />
      </section>
      <section className={ComponentStyles.footer_container_four}>Copyright &#xa9; 2020 Unify.</section>
    </div>
  );
}
