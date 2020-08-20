/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import FeatureEventAdd from '../FeatureEventAdd';
import EventCard from '../EventCard';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

export default function EventSearchPage() {
  return (
    <div className={ComponentStyles.event_search_page_container}>
      <div className={ComponentStyles.event_search_page_sec_one}>
        <section className={ComponentStyles.event_search}>
          Search Bar area
        </section>
        <section className={ComponentStyles.event_search_monthly_result}>
          <span className={`typography_spartacus_three ${ComponentStyles.event_search_month}`}>August 2020</span>
          <section className={ComponentStyles.event_search_monthly_result_card}>
            <span className={ComponentStyles.event_search_monthly_result_card_date}>
              <span className="typography_spartacus_one_bold">
                17 - 20
              </span>
              <span className="typography_spartacus_one">
                August
              </span>

            </span>
            <div className={ComponentStyles.event_search_monthly_result_event_card}>
              <EventCard />
            </div>
          </section>
          <section className={ComponentStyles.event_search_monthly_result_card}>
            <span className={ComponentStyles.event_search_monthly_result_card_date}>
              <span className="typography_spartacus_one_bold">
                17 - 20
              </span>
              <span className="typography_spartacus_one">
                August
              </span>

            </span>
            <div className={ComponentStyles.event_search_monthly_result_event_card}>
              <EventCard />
            </div>
          </section>
        </section>
        <section className={ComponentStyles.event_search_monthly_result}>
          <span className={`typography_spartacus_three ${ComponentStyles.event_search_month}`}>September 2020</span>
          <section className={ComponentStyles.event_search_monthly_result_card}>
            <span className={ComponentStyles.event_search_monthly_result_card_date}>
              <span className="typography_spartacus_one_bold">
                17 - 20
              </span>
              <span className="typography_spartacus_one">
                Sept.
              </span>

            </span>
            <div className={ComponentStyles.event_search_monthly_result_event_card}>
              <EventCard />
            </div>
          </section>
          <section className={ComponentStyles.event_search_monthly_result_card}>
            <span className={ComponentStyles.event_search_monthly_result_card_date}>
              <span className="typography_spartacus_one_bold">
                17 - 20
              </span>
              <span className="typography_spartacus_one">
                Sept.
              </span>

            </span>
            <div className={ComponentStyles.event_search_monthly_result_event_card}>
              <EventCard />
            </div>
          </section>
        </section>
        <a className={ComponentStyles.event_search_back_to_top} href="#">
          <EventIcon image="/assets/topArrow.png" width="30px" height="30px" marginRight="5px" />
          Back to top
        </a>
      </div>
      <div className={ComponentStyles.event_search_page_sec_two}>
        <FeatureEventAdd />
        <br />
        <FeatureEventAdd />
      </div>
    </div>
  );
}
