import React from 'react';
import ComponentStyles from '../style/styles.module.css';
import { renderIcon, } from '../../helperFunctions';
import NewsCard from '../../NewsCard';

export default function MobileRegular({
  event,
  renderDates,
  renderLocation,
  renderViewingOptions,
  updateSpeakerModal,
  updateTicketsModal }) {
  return (
    <section className={ComponentStyles.event_page_small_screen_ghost}>
      <section className={ComponentStyles.event_page_small_screen_container}>
        <div className={ComponentStyles.event_page_small_screen_div_two}>
          <div className={ComponentStyles.event_page_mobile_hide}>
            <span className="typography_spartacus_eight">
              {event.type}
              {event.badges && event.badges.map((badge) => renderIcon(badge.description))}
            </span>
            {renderViewingOptions()}
            <span
              className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
            >{renderDates(event.dateStart, event.dateEnd)}
            </span>
            <span
              className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
            >{renderLocation()}
            </span>
          </div>
          <button
            onClick={() => updateTicketsModal(true)}
            type="button"
            className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
          >Request Discount Tickets
          </button>
          <hr className={ComponentStyles.event_page_section_two_divider} />
          <button
            onClick={() => updateSpeakerModal(true)}
            type="button"
            className={`button_lg_styled_light ${ComponentStyles.event_page_section_two_button}`}
          >Become a Sponsor/Speaker
          </button>
        </div>
        {event.articles.length > 0 &&
        <div className={ComponentStyles.event_page_small_screen_div_one}>
          <section className={ComponentStyles.event_page_news}>
            <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>In The News</span>
            <section className={ComponentStyles.event_page_related_events_inner_img_news}>
              {event.articles.map((article) => <NewsCard alternate line article={article} />)}
            </section>
          </section>
        </div>}

      </section>
      <hr className={ComponentStyles.event_page_glance_bottom} />
    </section>
  );
}
