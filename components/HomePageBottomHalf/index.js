/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import React from 'react';
import { Tabs } from 'antd';
import moment from 'moment';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import SpeakerCarousel from '../SpeakerCarousel';
import FeatureEventAd from '../FeatureEventAdd';
import NewsCard from '../NewsCard';
import EventCard from '../EventCard';
import EventIcon from '../EventIcon';
import { organizeEventsByMonth } from '../helperFunctions';

export default function HomePageBottomHalf({ articles, events, speakers }) {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const allMonths = moment.months();
  const displayMonth = () => {
    const months = [allMonths[new Date().getMonth()]];
    for (let i = 1; i <= 5; i++) {
      const index = new Date().getMonth() + i;
      if (index > 11) {
        months.push(allMonths[index - 12]);
      } else {
        months.push(allMonths[index]);
      }
    }
    return months;
  };
  const organizedEvents = organizeEventsByMonth(events);
  return (
    <div className={`${ComponentStyles.container} home_sec_bottom`}>
      <section className={ComponentStyles.section_a}>
        <section className={ComponentStyles.section_a_speaker_container}>
          {speakers.length > 2 && <SpeakerCarousel title="Speakers You Don’t Want to Miss" speakers={speakers} />}
          <hr className={ComponentStyles.section_a_divider} />
        </section>
        {events.length &&
        <section className={ComponentStyles.upcoming_event_container}>
          <span className={`typography_spartacus_eight ${ComponentStyles.upcoming_vents_title}`}>Upcoming Events</span>
          <Tabs
            defaultActiveKey="1"
            tabPosition="top"
            onChange={callback}
            centered
            className={ComponentStyles.tabs_container}
          >
            {displayMonth().map(i => (
              <TabPane tab={`${i}`} key={i}>
                {organizedEvents.find((event) => event.month === i) ?
                  <section className={ComponentStyles.upcoming_event_card_container}>
                    {events && events.map((event) => {
                      if (allMonths[new Date(event.dateStart).getMonth()] === i) {
                        return <EventCard showLine event={event} showDate key={event.id} />;
                      }
                    })}
                  </section>
                  :
                  <p key={i} className={`${ComponentStyles.no_event_container} typography_spartacus_ten_italic`}>
                    {`Sorry! We currently do not have any events for ${i}`}
                  </p>}

              </TabPane>
            ))}
          </Tabs>
          <Link href="/events">
            <span
              className={`typography_spartacus_nine_demi_bold ${ComponentStyles.view_more}`}
            >View More <span><EventIcon image="/assets/viewMore.png" width="25px" height="25px" /></span>
            </span>
          </Link>
        </section>}
      </section>
      <section className={ComponentStyles.section_b}>
        <FeatureEventAd />
        <hr className={ComponentStyles.section_b_divider} />
        {articles.length > 0 &&
          <>
            <span className="typography_spartacus_eight">News & Updates</span>
            {articles && articles.map((article) => <NewsCard line key={article.id} article={article} />)}
          </>}
      </section>
    </div>
  );
}
