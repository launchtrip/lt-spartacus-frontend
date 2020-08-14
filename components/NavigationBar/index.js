import React, { useState } from 'react';
import Link from 'next/link';

import ComponentStyles from './style/styles.module.css';

export default function NavgiationBar({ page }) {
  const [state, setState] = useState(page);
  const checkState = (type) => {
    if (type === state) return ComponentStyles.navigation_menu_button_active;
    return ComponentStyles.navigation_menu_button;
  };
  return (
    <div className={ComponentStyles.navigation_main_container}>
      <section className={ComponentStyles.navigation_section_one}>
        Unify.
      </section>
      <section className={ComponentStyles.navigation_section_two}>
        <section className={ComponentStyles.section_two_button_container}>
          <Link href="/">
            <button
              type="button"
              onClick={() => setState('Home')}
              className={checkState('Home')}
            >
              Home
            </button>
          </Link>
          <Link href="/virtualevents">
            <button
              type="button"
              className={checkState('Events')}
            >
              Events
            </button>
          </Link>
          <Link href="/partnerships">
            <button
              type="button"
              className={checkState('Partnerships')}
            >
              Partnerships
            </button>
          </Link>
          <Link href="/about" as="About-Us">
            <button
              type="button"
              className={checkState('About')}
            >
              About Us
            </button>
          </Link>

        </section>

      </section>
      <section className={ComponentStyles.navigation_section_three}>
        <section className={ComponentStyles.section_three_button_container}>
          <button type="button" className="button_small_styled">
            Sign Up
          </button>
          <button type="button" className="button_small_plain">
            Log In
          </button>
        </section>
      </section>
    </div>

  );
}
