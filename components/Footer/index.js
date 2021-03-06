/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';

export default function Footer() {
  return (
    <div className={ComponentStyles.footer_container}>
      <section className={ComponentStyles.footer_container_one}>
        <section className={ComponentStyles.footer_container_one_inner}>
          <span className="typography_spartacus_twenty_six_bold">Unify.</span>
          <span className={ComponentStyles.footer_container_one_copy}>Assembly of World Leading Industy Events</span>
        </section>
      </section>
      <section className={ComponentStyles.footer_container_two}>
        <section className={ComponentStyles.footer_container_two_inner}>
          <Link href="/privacy-policy">
            <span className="typography_spartacus_fifteen">Privacy Policy</span>
          </Link>
          <Link href="/terms-and-conditions">
            <span className="typography_spartacus_fifteen">Terms of Service</span>
          </Link>
          <a href="https://launchtrip.com/" target="_blank">
            <span className="typography_spartacus_fifteen">Launchtrip</span>
          </a>
          <Link href="/contact-us">
            <span className="typography_spartacus_fifteen">Contact</span>
          </Link>
        </section>
      </section>
      <section className={ComponentStyles.footer_container_three}>
        <a href="https://www.facebook.com/UnifyPlatform/" target="_blank">
          <img alt="facebook" src="/assets/facebook.png" className={ComponentStyles.footer_img} />
        </a>
        <a href="https://www.linkedin.com/company/unify-platform/" target="_blank">
          <img alt="linkedin" src="/assets/linkedin.png" className={ComponentStyles.footer_img} />
        </a>
        <a href="https://twitter.com/Unify_Events" target="_blank">
          <img alt="twitter" src="/assets/twitter.png" className={ComponentStyles.footer_img} />
        </a>
      </section>
      <section className={ComponentStyles.footer_container_four}>Copyright &#xa9; 2020 Unify.</section>
    </div>
  );
}
