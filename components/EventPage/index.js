import React, { useState } from 'react';
import ComponentStyles from './style/styles.module.css';
import SpeakerCarousel from '../SpeakerCarousel';
import EventIcon from '../EventIcon';
import DynamicModal from '../DynamicModal';
import NewsCard from '../NewsCard';
import RelatedEventCard from '../RelatedEventCard';
import Multimedia from '../Multimedia';
import data from './data';
import Twitter from '../Twitter';
import QuestionWidget from '../QuestionWidget';

export default function EventPage({ premier }) {
  const [ticketsModal, updateTicketsModal] = useState(false);
  const [speakerModal, updateSpeakerModal] = useState(false);

  const social = (display) => (
    <div className={ComponentStyles.event_page_social_container} style={{ justifyContent: display }}>
      <span className="typography_spartacus_eight_light">Share:</span>
      <EventIcon image="/assets/twitter.png" width="25px" height="25px" marginLeft="5px" marginRight="5px" />
      <EventIcon image="/assets/facebook.png" width="25px" height="25px" marginRight="5px" />
      <EventIcon image="/assets/linkedin.png" width="25px" height="25px" marginRight="5px" />
    </div>
  );

  return (
    <div className={ComponentStyles.event_page_container}>
      <DynamicModal
        updateModal={updateTicketsModal}
        modal={ticketsModal}
        width={600}
        type="request"
      />
      <DynamicModal
        updateModal={updateSpeakerModal}
        modal={speakerModal}
        width={600}
        type="sponsor"
      />
      <section className={ComponentStyles.event_page_section_one}>
        <section className={ComponentStyles.event_page_section_one_container}>
          <img src="/assets/banner2.png" alt="" className={ComponentStyles.event_page_image} />
          <span className="typography_spartacus_twenty_demi_bold">
            Innovation Festival
            <span className={`typography_spartacus_one ${ComponentStyles.event_page_host}`}> by Fast Company</span>
          </span>
          <span className="typography_spartacus_seventeen_bold">October 5-9, 2020 | Los Angeles, CA</span>
          <span className={`${ComponentStyles.event_page_draw_line} typography_spartacus_four`}>
            The biggest tech event of Canada drawing almost 20,000 attendees
          </span>
          <p className={`${ComponentStyles.event_page_description} typography_spartacus_four`}>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            i standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            lso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Why do we use it? It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters, as opposed to using Content here,
            content here, making it look like readable English. Many desktop publishing packages and web
            page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum
            will uncover many web sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          <span className={`typography_spartacus_eight ${ComponentStyles.event_page_glance_section}`}>
            At a Glance  <hr className={ComponentStyles.event_page_glance_divider} />
          </span>
          <section className={ComponentStyles.event_page_glace_details_container}>
            <span className={`${ComponentStyles.event_page_glace_detail} typography_spartacus_four`}>Size <br />
              <span className={`${ComponentStyles.event_page_glace_detail_result} typography_spartacus_thirteen_demi_bold`}>20,000+ Attendees</span>
            </span>
            <span
              className={`${ComponentStyles.event_page_glace_detail} typography_spartacus_four`}
            >Industry(s)<br />
              <span
                className={`${ComponentStyles.event_page_glace_detail_result} typography_spartacus_thirteen_demi_bold`}
              >Technology, Busineses
              </span>
            </span>
            <span
              className={`${ComponentStyles.event_page_glace_detail} typography_spartacus_four`}
            >Who Should Attend<br />
              <span
                className={`${ComponentStyles.event_page_glace_detail_result} typography_spartacus_thirteen_demi_bold`}
              >Innovators in business, media, and politics
              </span>
            </span>
            <span
              className={`${ComponentStyles.event_page_glace_detail} typography_spartacus_four`}
            >In Person or Virtual<br />
              <span
                className={`${ComponentStyles.event_page_glace_detail_result} typography_spartacus_thirteen_demi_bold`}
              >Both
              </span>
            </span>

          </section>
          <hr className={ComponentStyles.event_page_glance_bottom} />
          {premier &&
          <>
            <section className={ComponentStyles.event_page_speaker_container}>
              <SpeakerCarousel title="Speakers" hideEventTitle />
            </section>
            <hr className={ComponentStyles.event_page_glance_bottom} />

          </>}
          {!premier &&
          <section className={ComponentStyles.event_page_related_events}>
            <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Related Events</span>
            <section className={ComponentStyles.event_page_related_events_inner}>
              <RelatedEventCard />
              <RelatedEventCard />
              <RelatedEventCard />
              <RelatedEventCard />
            </section>
          </section>}

          {premier &&
          <>
            <Multimedia data={data.media} length={data.media.length} />
            <hr className={ComponentStyles.event_page_glance_bottom} />
          </>}

          {premier &&
          <>
            <section className={ComponentStyles.event_page_testemonials}>
              <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>Testemonials</span>
              <div className={ComponentStyles.event_page_testemonials_inner}>
                <p className={`typography_spartacus_fifteen ${ComponentStyles.event_page_testemonial}`}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  <p>- Jane Doe</p>
                </p>
                <p className={`typography_spartacus_fifteen ${ComponentStyles.event_page_testemonial}`}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  <p>- Jane Doe</p>
                </p>
                <p className={`typography_spartacus_fifteen ${ComponentStyles.event_page_testemonial}`}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                  <p>- Jane Doe</p>
                </p>

              </div>
            </section>
            <hr className={ComponentStyles.event_page_glance_bottom} />

          </>}
          {premier &&
          <>
            <section className={ComponentStyles.event_page_news}>
              <span className={`typography_spartacus_eight ${ComponentStyles.event_page_related_title}`}>In The News</span>
              <section className={ComponentStyles.event_page_related_events_inner_img_news}>
                <span className={ComponentStyles.event_page_related_img_news_card}>
                  <img src="/assets/banner1.png" alt="" className={ComponentStyles.event_page_related_img_news_card_img} />
                  <NewsCard alternate withImage />
                </span>
              </section>
              <section className={ComponentStyles.event_page_related_events_inner_img_news}>
                <span className={ComponentStyles.event_page_related_img_news_card}>
                  <img src="/assets/banner1.png" alt="" className={ComponentStyles.event_page_related_img_news_card_img} />
                  <NewsCard alternate withImage />
                </span>
              </section>
              <section className={ComponentStyles.event_page_related_events_inner_img_news}>
                <span className={ComponentStyles.event_page_related_img_news_card}>
                  <img src="/assets/banner1.png" alt="" className={ComponentStyles.event_page_related_img_news_card_img} />
                  <NewsCard alternate withImage />
                </span>
              </section>
            </section>
            <hr className={ComponentStyles.event_page_glance_bottom} />

          </>}

          {premier &&
          <>
            <QuestionWidget type="horizontal" />
            <hr className={ComponentStyles.event_page_glance_bottom} />
            {social('start')}
          </>}
        </section>
      </section>

      <section className={ComponentStyles.event_page_section_two}>
        <span className="typography_spartacus_eight ">
          Hybrid
          <EventIcon image="/assets/icon-paid.png" width="8px" height="12px" marginLeft="5px" />
          <EventIcon image="/assets/icon-inperson.png" width="10px" height="12px" marginLeft="5px" />
        </span>
        <span
          className={`${ComponentStyles.event_page_section_two_event_types} typography_spartacus_three`}
        >
          This event has both
          <span className="typography_spartacus_three_bold"> In Person</span> and <span className="typography_spartacus_three_bold">Virtual</span> options
        </span>
        <span
          className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
        >October 5-9, 2020
        </span>
        <span
          className={`typography_spartacus_seventeen_bold ${ComponentStyles.event_page_section_two_event_types_details}`}
        >Los Angeles, CA
        </span>
        {!premier &&
        <button
          onClick={() => updateTicketsModal(true)}
          type="button"
          className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
        >Request Discount Tickets
        </button>}
        {premier &&
        <button
          onClick={() => updateTicketsModal(true)}
          type="button"
          className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
        >Get Tickets
        </button>}
        <hr className={ComponentStyles.event_page_section_two_divider} />
        <button
          onClick={() => updateSpeakerModal(true)}
          type="button"
          className={`button_lg_styled_light ${ComponentStyles.event_page_section_two_button}`}
        >Become a Sponsor/Speaker
        </button>
        <hr className={ComponentStyles.event_page_section_two_divider} />
        {premier &&
        <>
          {social('center')}
          <hr className={ComponentStyles.event_page_section_two_divider} />
        </>}

        {premier &&
          <QuestionWidget type="vertical" />}

        {!premier &&
        <section className={ComponentStyles.event_page_section_two_news}>
          <span className={`typography_spartacus_eight ${ComponentStyles.event_page_section_two_news_title}`}>News & Opinion</span>
          <NewsCard alternate line />
          <NewsCard alternate line />
          <NewsCard alternate line />
        </section>}

        {premier &&
        <section className={ComponentStyles.event_page_section_two_twitter}>
          <Twitter name="tml" />
        </section>}

        {!premier && <div className={ComponentStyles.event_page_section_two_ad}>Google Add</div>}
      </section>
    </div>
  );
}