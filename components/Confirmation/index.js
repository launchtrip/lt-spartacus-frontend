import React from 'react';
import ComponentStyles from './style/styles.module.css';

export default function Confirmation() {
  return (
    <div className={ComponentStyles.confirmation_container}>
      <div>
        <span className="typography_spartacus_sixteen">
          Hi There!
          <br />
          Welcom to Unify.
        </span>

        <br />
        <br />

        <span className="typography_spartacus_eighteen_bold">
          Member perks
          <br />
          coming Soon!
        </span>
        <br />
        <br />
        <ul className={`typography_spartacus_one_bold ${ComponentStyles.list}`}>
          <li>Discount Tickets</li>
          <li>Sales Events</li>
          <li>Import Notifications and More!</li>
        </ul>
      </div>
    </div>
  );
}
