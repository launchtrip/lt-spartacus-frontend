/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DatePicker, Menu, Dropdown, Input, AutoComplete } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';
import FeatureEventAdd from '../FeatureEventAdd';
import EventCard from '../EventCard';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const searchResult = query =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>
              Found {query} on{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

export default function EventSearchPage({ data }) {
  if (!data) {
    return <p>no data</p>;
  }
  console.log(data);
  const [options, setOptions] = useState([]);

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = value => {
    console.log('onSelect', value);
  };

  const { RangePicker } = DatePicker;

  const menu = (
    <Menu>
      <Menu.Item>
        Virtual
      </Menu.Item>
      <Menu.Item>
        In Person
      </Menu.Item>
    </Menu>
  );

  // function onChange(date, dateString) {
  //   console.log(date, dateString);
  // }
  return (
    <div className={ComponentStyles.event_search_page_container}>
      <div className={ComponentStyles.event_search_page_sec_one}>
        <section className={ComponentStyles.event_search}>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
            className={`${ComponentStyles.search_container_input} searchPage`}
            notFoundContent="Sorry Eat Shit"
          >
            <Input.Search size="large" placeholder="Enter Company, Industry or Event" enterButton />
          </AutoComplete>
          <Dropdown overlay={menu} className={`${ComponentStyles.event_drop_down} typography_spartacus_thirteen`}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Expereince  Type <CaretDownOutlined className={ComponentStyles.event_drop_down_arrow} />
            </a>
          </Dropdown>
          <RangePicker
            className={ComponentStyles.event_date_picker}
            suffixIcon={<EventIcon image="/assets/calendar.png" width="16px" height="16px" />}
          />
        </section>

        {data.map((item) => (
          <section className={ComponentStyles.event_search_monthly_result}>
            <span className={`typography_spartacus_three ${ComponentStyles.event_search_month}`}>{item.month} {item.year}</span>
            {item.events.map((event) => (
              <section className={ComponentStyles.event_search_monthly_result_card}>
                <span className={ComponentStyles.event_search_monthly_result_card_date}>
                  <span className="typography_spartacus_one_bold">
                    {moment(event.dateStart).date()} - {moment(event.dateEnd).date()}
                  </span>
                  <span className="typography_spartacus_one">
                    {item.month}
                  </span>

                </span>
                <div className={ComponentStyles.event_search_monthly_result_event_card}>
                  <EventCard event={event} key={event.id} />
                </div>
              </section>
            ))}
            <hr className={ComponentStyles.section_a_divider} />

          </section>
        ))}

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
