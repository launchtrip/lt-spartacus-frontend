import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function MobileCopy() {
  const name = `home_sec_copy typography_spartacus_three ${ComponentStyles.mobile_copy_conatiner}`;
  return (
    <div className={name}>
      <section className={ComponentStyles.mobile_copy_conatiner_inner}>
        This is a limited  mobile experience. please check us out on
        desktop for full version. Mobile is coming <span className="typography_spartacus_three_bold">Sept 25th</span>
      </section>
    </div>
  );
}
