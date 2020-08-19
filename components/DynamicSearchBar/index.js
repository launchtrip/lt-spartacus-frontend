/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
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

export default function DynamicSearchBar() {
  const [options, setOptions] = useState([]);

  const handleSearch = value => {
    setOptions(value ? searchResult(value) : []);
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
        className={ComponentStyles.search_container_input}
        notFoundContent="Sorry Eat Shit"
      >
        <Input.Search size="large" placeholder="Enter Event or Industry" enterButton />
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
