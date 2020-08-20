import React from 'react';
import { Tabs } from 'antd';
import ComponentStyles from './style/styles.module.css';
import SpeakerCarousel from '../SpeakerCarousel';
import FeatureEventAd from '../FeatureEventAdd';
import NewsCard from '../NewsCard';
import EventCard from '../EventCard';
import EventIcon from '../EventIcon';

export default function HomePageBottomHalf() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }
  const months = ['August', 'September', 'October', 'Novermber', 'December', 'January'];
  return (
    <div className={`${ComponentStyles.container} home_sec_bottom`}>
      <section className={ComponentStyles.section_a}>
        <section className={ComponentStyles.section_a_speaker_container}>
          <SpeakerCarousel title="Speakers You Don’t Want to Miss" />
          <hr className={ComponentStyles.section_a_divider} />
        </section>
        <section className={ComponentStyles.upcoming_event_container}>
          <span className={`typography_spartacus_eight ${ComponentStyles.upcoming_vents_title}`}>Upcoming Events</span>
          <Tabs
            defaultActiveKey="1"
            tabPosition="top"
            onChange={callback}
            centered
            className={ComponentStyles.tabs_container}
          >
            {months.map(i => (
              <TabPane tab={`${i}`} key={i}>
                <section className={ComponentStyles.upcoming_event_card_container}>
                  <EventCard showLine />
                  <EventCard showLine />
                  <EventCard showLine />
                  <EventCard showLine />
                  <EventCard showLine />
                </section>

              </TabPane>
            ))}
          </Tabs>
          <span
            className={`typography_spartacus_nine_demi_bold ${ComponentStyles.view_more}`}
          >View More <span><EventIcon image="/assets/viewMore.png" width="25px" height="25px" /></span>
          </span>
        </section>
      </section>
      <section className={ComponentStyles.section_b}>
        <FeatureEventAd />
        <hr className={ComponentStyles.section_b_divider} />
        <span className="typography_spartacus_eight">News & Updates</span>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </section>
    </div>
  );
}
