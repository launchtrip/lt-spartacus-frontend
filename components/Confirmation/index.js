import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function Confirmation() {
  return (
    <div className={ComponentStyles.confirmation_container}>
      <div>
        <span className="typography_spartacus_sixteen">
          Welcome to Unify!
        </span>

        <br />
        <br />

        <span className="typography_spartacus_eighteen_bold">
          Log in using your new
          <br />
          account information and
          <br />
          we will update you on
          <br />
          member perks coming soon.
        </span>
        <br />
        <br />
        <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
          <li>Discount Tickets</li>
          <li>Access to Industry-leading Events and Updates </li>
          <li>Exclusive Access and More</li>
        </ul>
      </div>
    </div>
  );
}
