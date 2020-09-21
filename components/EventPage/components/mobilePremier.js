/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import QuestionWidget from '../../QuestionWidget';
import { renderIcon, } from '../../helperFunctions';
import Social from './social';

export default function MobilePremier({
  event,
  renderDates,
  renderLocation,
  renderViewingOptions,
  updateSpeakerModal,
}) {
  return (
    <section className={ComponentStyles.event_page_small_screen_ghost}>
      <section className={ComponentStyles.event_page_small_screen_container}>
        <div className={ComponentStyles.event_page_small_screen_div}>
        </div>
        <div className={ComponentStyles.event_page_small_screen_div_two}>
          <div className={ComponentStyles.event_page_mobile_hide} >
            <span className="typography_spartacus_eight ">
              {event.type}
              {event.badges && event.badges.map((badge) => renderIcon(badge.description))}
            </span>
            {renderViewingOptions()}
            <span
              className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
            >{renderDates()}
            </span>
            <span
              className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
            >{renderLocation()}
            </span>
          </div>
          <a
            target="_blank"
            href={event.ticketsUrl || 'www.google.ca'}
            className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
          >
            Get Tickets
          </a>
          <hr className={ComponentStyles.event_page_section_two_divider} />
          <button
            onClick={() => updateSpeakerModal(true)}
            type="button"
            className={`button_lg_styled_light ${ComponentStyles.event_page_section_two_button}`}
          >Become a Sponsor/Speaker
          </button>
          <Social event={event} display="center" />
        </div>
      </section>
      <hr className={ComponentStyles.event_page_glance_bottom} />
    </section>
  );
}
