/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { DatePicker, Menu, Dropdown, Input, AutoComplete, BackTop } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import moment from 'moment';
import FeatureEventAdd from '../FeatureEventAdd';
import EventCard from '../EventCard';
import ComponentStyles from './style/styles.module.css';
import EventIcon from '../EventIcon';
import { FetchSearchRequest } from '../../pages/api/Routes/Events';
import Error from '../Error';
import Title from '../Title';

const searchStyle = `typography_spartacus_four_italic ${ComponentStyles.search_result_title}`;
// const createUrl = (description) => `/event/${description.split(' ').join('-')}`;
const searchResult = (query, SetCompanyIndustryOrEvent, updateSearch, updateSelectedSearch) => {
  const company = query.find((q) => q.type === 'Company');
  const industry = query.find((q) => q.type === 'Industry');
  const event = query.find((q) => q.type === 'Event');
  if (!company.total && !industry.total && !event.total) {
    return [{ value: <p>We did not find any search results <br />based off of your input!</p> }];
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
        {company && company.total > 0 &&
          <>
            <span
              className={searchStyle}
            >
              Company
            </span>

            <section className={ComponentStyles.search_result_type}>
              {company.data.map((c) =>
                <span
                  key={c.id}
                  className={`${ComponentStyles.search_result_item} typography_spartacus_one`}

                  onClick={() => {
                    SetCompanyIndustryOrEvent({ id: c.id, type: 'company' });
                    updateSelectedSearch({ type: 'company', name: c.description });
                    updateSearch(c.description);
                  }}
                >{c.description}
                </span>)}
            </section>
          </>}
        {industry && industry.total > 0 &&
          <>
            <span
              className={searchStyle}
            >
              Industry
            </span>

            <section className={ComponentStyles.search_result_type}>
              {industry.data.map((c) =>
                <span
                  key={c.id}
                  className={`${ComponentStyles.search_result_item} typography_spartacus_one`}
                  onClick={() => {
                    SetCompanyIndustryOrEvent({ id: c.id, type: 'industry' });
                    updateSelectedSearch({ type: 'industry', name: c.description });
                    updateSearch(c.description);
                  }}
                >{c.description}
                </span>)}
            </section>
          </>}
        {event && event.total > 0 &&
          <>
            <span
              className={searchStyle}
            >
              Event
            </span>

            <section className={ComponentStyles.search_result_type}>
              {event.data.map((c) =>
                <span
                  key={c.id}
                  className={`${ComponentStyles.search_result_item} typography_spartacus_one`}
                  onClick={() => {
                    SetCompanyIndustryOrEvent({ id: c.id, type: 'event' });
                    updateSelectedSearch({ type: 'event', name: c.description });
                    updateSearch(c.description);
                  }}
                >{c.description}
                </span>)}
            </section>
          </>}
      </div>
    )
  }];
};

export default function EventSearchPage({ data, methods }) {
  const [options, setOptions] = useState([]);
  const [search, updateSearch] = useState('');
  const [selectedSearch, updateSelectedSearch] = useState({});

  const {
    setState,
    setType,
    SetCompanyIndustryOrEvent,
    updateEventPageData,
    refreshWithOriginalData,
    setSearchError,
    searchError,
    type
  } = methods;

  const handleSearch = async value => {
   
    if(!value){
      refreshWithOriginalData();
      updateSearch('')
      updateSelectedSearch('')
      return;
   }

    try {
      updateSearch(value);
      const res = await FetchSearchRequest(value);
      setOptions(value ? searchResult(res, SetCompanyIndustryOrEvent, updateSearch, updateSelectedSearch) : []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEnter = async (event) => {
    if (event.keyCode === 13) {
      if (event.target.value.length === 0) {
        refreshWithOriginalData();
        updateSelectedSearch('');

        return;
      }
      try {
        const res = await FetchSearchRequest(event.target.value);
        const industry = res.find((q) => q.type === 'Industry');

        if (industry && industry.length) {
          updateEventPageData(industry.data[0].id);
          updateSearch('');
          updateSelectedSearch({ type: 'industry', name: industry.data[0].description });

          return;
        }
        setSearchError(
          {
            type: 404,
            title: 'Page Not Found',
            reason: 'The industry, company, or event you are looking for does not exist',
          }
        );
        updateSearch('');
        updateSelectedSearch('');
      } catch (error) {
        updateSearch('');
        updateSelectedSearch('');

        console.log(error);
      }
    }
  };

  function onChange(dates, dateStrings) {
    setState({ dateStart: dateStrings[0], dateEnd: dateStrings[1] });
  }
  const { RangePicker } = DatePicker;

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setType('virtual')}>
        Virtual
      </Menu.Item>
      <Menu.Item onClick={() => setType('inPerson')}>
        In Person
      </Menu.Item>
      <Menu.Item onClick={() => setType('hybrid')}>
        Hybrid
      </Menu.Item>
      <Menu.Item onClick={() => setType(undefined)}>
        All
      </Menu.Item>
    </Menu>
  );
  const renderDate = (dateStart, dateEnd) => {
    if(new Date(dateStart).toDateString() === new Date(dateEnd).toDateString()){
      return `${moment(dateStart).date()}`
    }
    return `${moment(dateStart).date()} - ${moment(dateEnd).date()}`
  }
  const renderMonth = (month, dateStart, dateEnd) => {
    const allMonths = moment.months();
    const endMonth = allMonths[new Date(dateEnd).getMonth()];
    if(month !== endMonth){
      return(
        <div className={ComponentStyles.event_search_multi_date_container}>
          <div className={ComponentStyles.event_search_multi_date_container_inner}>
            <span className="typography_spartacus_one_bold">
              {moment(dateStart).date()} 
            </span>
            <span className="typography_spartacus_one">
            {moment(dateStart, 'YYY-MM-DD').format('MMM')} 
            </span>
          </div>
          <span className="typography_spartacus_one_bold">-</span>
          <div className={ComponentStyles.event_search_multi_date_container_inner}>
            <span className="typography_spartacus_one_bold">
             {moment(dateEnd).date()}
            </span>
            <span className="typography_spartacus_one">
            {moment(dateEnd, 'YYY-MM-DD').format('MMM')}
            </span>
          </div>
      </div>
      )
    }
    return ( 
      <>
        <span className="typography_spartacus_one_bold">
        {renderDate(dateStart, dateEnd)}
        </span>
        <span className="typography_spartacus_one">
          {month}
        </span>
      </>
    )

  }

  return (
    <div className={ComponentStyles.event_search_page_container}>
      <div className={ComponentStyles.event_search_page_sec_one}>
        <section className={ComponentStyles.event_search}>
          <AutoComplete
            dropdownMatchSelectWidth={252}
            options={options}
            onKeyDown={handleEnter}
            onSearch={handleSearch}
            value={search}
            className={`${ComponentStyles.search_container_input} searchPage`}
            allowClear
          >
            <Input.Search size="large" placeholder="Enter Company, Industry or Event" enterButton />
          </AutoComplete>
          <Dropdown overlay={menu} className={`${ComponentStyles.event_drop_down} typography_spartacus_thirteen`}>
            <a className="ant-dropdown-link">
              Event Type - {type ? type === 'inPerson' ? 'In Person' : type : 'All'}
              <CaretDownOutlined className={ComponentStyles.event_drop_down_arrow} />
            </a>
          </Dropdown>
          <RangePicker
            onChange={onChange}
            className={ComponentStyles.event_date_picker}
            suffixIcon={<EventIcon image="/assets/calendar.png" width="16px" height="16px" />}
          />
        </section>
        {Object.keys(selectedSearch).length > 0 &&
          <section className={ComponentStyles.selected_search_display}>
            <div className="typography_spartacus_ten_italic">
              {`Displaying results for ${selectedSearch.type} : ${selectedSearch.name}`}
            </div>
          </section>}
        {searchError ?
          <section className={ComponentStyles.event_search_monthly_result}>
            <section className={ComponentStyles.event_search_monthly_result_card}>
              <Error error={searchError} />
            </section>
          </section>

          :
          <>
             <Title name="All Events"/>

            {data && data.map((item) => (
              <section className={ComponentStyles.event_search_monthly_result}>
                <span className={`typography_spartacus_three ${ComponentStyles.event_search_month}`}>{item.month} {item.year}</span>
                {item.events.map((event) => (
                  <section className={ComponentStyles.event_search_monthly_result_card}>
                    <span className={ComponentStyles.event_search_monthly_result_card_date}>
                    {renderMonth(item.month, event.dateStart, event.dateEnd)}
                    </span>
                    <div className={ComponentStyles.event_search_monthly_result_event_card}>
                      <EventCard event={event} key={event.id} />
                    </div>
                  </section>
                ))}
                <hr className={ComponentStyles.section_a_divider} />

              </section>
            ))}
              <BackTop className={ComponentStyles.event_search_back_to_top} > 
                <EventIcon image="/assets/topArrow.png" width="30px" height="30px" marginRight="5px" />
                Back to top
              </BackTop>
          </>}
      </div>
      <div className={ComponentStyles.event_search_page_sec_two}>
        <FeatureEventAdd />
      </div>
    </div>
  );
}
