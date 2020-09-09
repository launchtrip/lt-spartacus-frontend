/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';
import { FetchSearchRequest } from '../../pages/api/Routes';
import Link from 'next/link';

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const searchStyle = `typography_spartacus_four_italic ${ComponentStyles.search_result_title}`;
const searchResult = query => {
  console.log(query);
  if (query[0].total === 0 && query[1].total === 0) {
    return [{ value: <p>we did not find any search results <br />based off of your input!</p> }];
  }
  return (
    new Array(getRandomInt(1))
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
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                className={searchStyle}
              >
                Industry
              </span>

              <section className={ComponentStyles.search_result_type}>
                {query[0].total < 1 &&
                <span>Sorry we currently don’t have
                  <br />this industry. Stay tuned
                </span>}
                {query[0].total >= 1 && query[0].data.map((industry) =>
                  <span
                    key={industry.id}
                    className="typography_spartacus_one"
                  >{industry.description}
                  </span>)}
              </section>

              <span
                className={searchStyle}
              >
                Event
              </span>
              <section className={ComponentStyles.search_result_type}>
                {query[1].total < 1 &&
                <span>Sorry we currently don’t have
                  <br />this event. Stay tuned
                </span>}
                {query[1].total >= 1 && query[1].data.map((event) =>
                <Link href={`/event/${event.description.split(' ').join('-')}`}>
                  <span
                    key={event.id}
                    className="typography_spartacus_one"
                  >{event.description}
                  </span>
                </Link>
                )}
              </section>
            </div>
          ),
        };
      })
  );
};

export default function DynamicSearchBar() {
  const [options, setOptions] = useState([]);
  const [search, updateSearch] = useState('')
  const handleSearch = async value => {
    try {
      updateSearch(value)
      const res = await FetchSearchRequest(value);
      setOptions(value ? searchResult(res) : []);
    } catch (error) {
      console.log(error);
    }
  };

  const onSelect = value => {
    console.log('onSelect', value);
  };

  const name = `home_sec_search ${ComponentStyles.search_container}`;
  return (
    <div className={name}>
      <span className={`typography_spartacus_two_bold ${ComponentStyles.search_container_copy}`}>Your Industry:</span>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        value={search}
        className={ComponentStyles.search_container_input}
      >
        <Input.Search size="large" placeholder="Enter Event or Industry" enterButton className="searchBar" />
      </AutoComplete>
      <section className={ComponentStyles.legend_container}>
        <span
          className={`typography_spartacus_fourteen ${ComponentStyles.legend_item}`}
        >
          <EventIcon image="/assets/icon-paid.png" height="0.9em" width="8px" marginRight="4px" />
          <span>Paid Event</span>
        </span>
        <span
          className={`typography_spartacus_fourteen ${ComponentStyles.legend_item}`}
        >
          <EventIcon image="/assets/icon-virtual.png" height="0.9em" width="12px" marginRight="4px" />
          <span>Virtual</span>
        </span>
        <span
          className={`typography_spartacus_fourteen ${ComponentStyles.legend_item}`}
        >
          <EventIcon image="/assets/icon-inperson.png" height="0.9em" width="12px" marginRight="4px" />
          <span>In Person</span>
        </span>
      </section>
    </div>
  );
}
