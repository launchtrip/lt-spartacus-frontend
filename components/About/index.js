import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function AboutPage() {
  return (
    <div className={ComponentStyles.about_container}>
      <p className={`${ComponentStyles.about_paragraph} typography_spartacus_four`}>
        We created Unify in order to get attendees to outstanding events,
        whether that’s in person or virtually. Our goal at Unify is to elevate
        the overall experience for attendees, from introducing new exciting in-person
        and virtual corporate events spanning across 100 different industries to
        providing perks and updates for users. At Unify, we&apos;re designing and building
        innovative tools to help events work together, to help them deliver the best
        experience possible.
      </p>
      <p className={`${ComponentStyles.about_paragraph} typography_spartacus_four`}>
        During these unprecedented times, the only thing that is certain, is ensuring that
        small and large companies alike and across multiple industries, continue to survive
        and grow. The power of events and what they provide goes farther than networking and
        education – it’s the intrinsic value of empowering professionals to work together for
        today and into the future. We’re here to help in any way we can.
      </p>
    </div>
  );
}
