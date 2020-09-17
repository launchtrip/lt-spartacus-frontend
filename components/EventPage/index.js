/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import moment from 'moment';
import ComponentStyles from './style/styles.module.css';
import DynamicModal from '../DynamicModal';
import Multimedia from '../Multimedia';
import QuestionWidget from '../QuestionWidget';
import { renderIcon } from '../helperFunctions';
import {
  Description,
  Glance,
  Speaker,
  MobilePremier,
  MobileRegular,
  PremierNews,
  RegularNews,
  RelatedEvents,
  Social,
  Testemonials,
  TwitterMobile,
  TwitterWeb
} from './components';

export default function EventPage({ premier, event }) {
  const [ticketsModal, updateTicketsModal] = useState(false);
  const [speakerModal, updateSpeakerModal] = useState(false);
  const allMonths = moment.months();
  const startDay = moment(event.dateStart).date();
  const endDay = moment(event.dateEnd).date();
  const year = moment(event.dateEnd).year();
  console.log(event);
  const renderViewingOptions = () => (
    event.type.toLowerCase() === 'hybrid' ?
      <>
        <span
          className={`${ComponentStyles.event_page_section_two_event_types} typography_spartacus_three`}
        >
          This event has both
          <span
            className="typography_spartacus_three_bold"
          > In Person
          </span> and <span className="typography_spartacus_three_bold">Virtual</span> options
        </span>
      </>
      :
      <>
        <span
          className={`${ComponentStyles.event_page_section_two_event_types} typography_spartacus_three`}
        >
          This event has a
          <span
            className="typography_spartacus_three_bold"
          > {event.type} option
          </span>
        </span>
      </>
  );

  const renderDates = () => (
    <>
      {allMonths[new Date(event.dateStart).getMonth()]} {startDay}-{endDay}, {year}
    </>
  );
  const renderLocation = () => (
    <>
      {event.city.name}, {event.city.countryAbbr}
    </>
  );

  return (
    <div className={ComponentStyles.event_page_container}>
      <DynamicModal
        updateModal={updateTicketsModal}
        modal={ticketsModal}
        width={600}
        type="request"
        event={event.id}
      />
      <DynamicModal
        updateModal={updateSpeakerModal}
        modal={speakerModal}
        width={600}
        type="sponsor"
        event={event.id}

      />

      <section className={ComponentStyles.event_page_section_one}>
        <section className={ComponentStyles.event_page_section_one_container}>
          <img src={event.logo.url} alt="" className={ComponentStyles.event_page_image} />
          <span className="typography_spartacus_twenty_demi_bold">
            {event.name}
            <span className={`typography_spartacus_one ${ComponentStyles.event_page_host}`}> by {event.company.name}</span>
          </span>
          <span className="typography_spartacus_seventeen_bold">
            {renderDates()} | {renderLocation()}
          </span>
          <span className={`${ComponentStyles.event_page_draw_line} typography_spartacus_four`}>
            {event.slogan}
          </span>
          <Description event={event} premier={premier} />
          <Glance event={event} />

          {premier && <Speaker event={event} />}
          {premier &&
          <MobilePremier
            event={event}
            renderDates={renderDates}
            renderLocation={renderLocation}
            renderViewingOptions={renderViewingOptions}
            updateSpeakerModal={updateSpeakerModal}
            updateTicketsModal={updateTicketsModal}
          />}
          {!premier &&
          <MobileRegular
            event={event}
            renderDates={renderDates}
            renderLocation={renderLocation}
            renderViewingOptions={renderViewingOptions}
            updateSpeakerModal={updateSpeakerModal}
            updateTicketsModal={updateTicketsModal}
          />}
          {!premier && <RelatedEvents />}

          {premier && event.media.length &&
            <>
              <Multimedia data={event.media} length={event.media.length} />
              <hr />
            </>}

          {premier && event.testimonials.length > 0 && <Testemonials event={event} />}
          {premier && event.external_articles.length > 0 &&
            <>
              <section className={ComponentStyles.event_page_news_outter}>
                <PremierNews event={event} />
                {premier && event.twitterAccount && <TwitterMobile twitterName={event.twitterAccount} />}
              </section>
              <hr />
            </>}

          {premier &&
            <>
              <QuestionWidget type="horizontal" id={event.id} />
              <hr />
              <Social display="start" />
            </>}
        </section>
      </section>

      <section className={ComponentStyles.event_page_section_two}>
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
        {!premier &&
          <button
            onClick={() => updateTicketsModal(true)}
            type="button"
            className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
          >Request Discount Tickets
          </button>}
        {premier &&
        <a
          target="_blank"
          href={event.ticketsUrl || 'www.google.ca'}
          className={`button_lg_styled_filled ${ComponentStyles.event_page_section_two_button}`}
        >
          Get Tickets
        </a>}
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
            <Social display="center" />
            <hr className={ComponentStyles.event_page_section_two_divider} />
          </>}

        {premier && <QuestionWidget type="vertical" id={event.id} />}
        {!premier && <RegularNews event={event} />}
        {premier && event.twitterAccount && <TwitterWeb twitterName={event.twitterAccount} />}

        {!premier && <div className={ComponentStyles.event_page_section_two_ad}>Google Add</div>}
      </section>
    </div>
  );
}
