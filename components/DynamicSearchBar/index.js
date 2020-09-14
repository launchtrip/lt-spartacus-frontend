/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import Link from 'next/link';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';
import { FetchSearchRequest } from '../../pages/api/Routes';

const searchStyle = `typography_spartacus_four_italic ${ComponentStyles.search_result_title}`;
const createUrl = (description, id) => `/event/${description.split(' ').join('-')}-id-${id}`;
const searchResult = (query, updateSearchFunction) => {
  const industry = query.find((q) => q.type === 'Industry');
  const event = query.find((q) => q.type === 'Event');

  if (industry.total === 0 && event.total === 0) {
    return [{ value: <p>we did not find any search results <br />based off of your input!</p> }];
  }
  return [{
    value: (
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
          {!industry.total &&
          <span>Sorry we currently don’t have
            <br />this industry. Stay tuned
          </span>}
          {industry.data.map((ind) =>
            <span
              key={ind.id}
              className="typography_spartacus_one"
              onClick={() => updateSearchFunction(ind.id)}
            >{ind.description}
            </span>)}
        </section>

        <span
          className={searchStyle}
        >
          Event
        </span>
        <section className={ComponentStyles.search_result_type}>
          {!event.total &&
          <span>Sorry we currently don’t have
            <br />this event. Stay tuned
          </span>}
          {event.data.map((e) =>
            <Link href={createUrl(e.description, e.id)}>
              <span
                key={e.id}
                className="typography_spartacus_one"
              >{e.description}
              </span>
            </Link>
          )}
        </section>
      </div>
    )
  }];
};

export default function DynamicSearchBar({ updateSearchFunction, refreshWithOriginalData, setSearchError }) {
  const [options, setOptions] = useState([]);
  const [search, updateSearch] = useState('');

  const handleSearch = async value => {
    try {
      updateSearch(value);
      const res = await FetchSearchRequest(value);
      console.log(res);
      setOptions(value ? searchResult(res, updateSearchFunction) : []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.length === 0) {
        refreshWithOriginalData();
        return;
      }
      try {
        const res = await FetchSearchRequest(event.target.value);
        if (res && res[0].total) {
          updateSearchFunction(res[0].data[0].id);
          updateSearch('');
          return;
        }
        setSearchError(
          {
            type: 404,
            title: 'Page Not Found',
            reason: 'The industry or event you are looking for does not exist',
          }
        );
        updateSearch('');
      } catch (error) {
        updateSearch('');

        console.log(error);
      }
    }
  };

  const name = `home_sec_search ${ComponentStyles.search_container}`;
  return (
    <div className={name}>
      <span className={`typography_spartacus_two_bold ${ComponentStyles.search_container_copy}`}>Your Industry:</span>
      <AutoComplete
        dropdownMatchSelectWidth={252}
        options={options}
        onKeyDown={handleEnter}
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
