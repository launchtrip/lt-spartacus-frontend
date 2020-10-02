/* eslint-disable import/prefer-default-export */
import React from 'react';
import moment from 'moment';
import EventIcon from './EventIcon';

export function split(array, n) {
  const [...arr] = array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  const properValue = res.filter((r) => r.length === n);
  return properValue;
}

export function countdownInDays(date) {
  const date1 = new Date();
  const date2 = new Date(date);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
  return diffDays;
}

export function renderIcon(type) {
  const icons = {
    Paid: <EventIcon image="/assets/icon-paid.png" height="17px" width="10px" marginRight="7px" marginLeft="7px" />,
    Virtual: <EventIcon image="/assets/icon-virtual.png" height="14px" width="15px" marginRight="7px" marginLeft="7px" />,
    'In Person': <EventIcon image="/assets/icon-inperson.png" height="15px" width="15px" marginRight="7px" marginLeft="7px" />,
  };
  return icons[type];
}

export function organizeEventsByMonth(events) {
  const allMonths = moment.months();
  const results = [];
  events.forEach((event) => {
    const monthstart = allMonths[new Date(event.dateStart).getMonth()];
    const checkMonth = results.find((result) =>
      (result.month === monthstart && result.year === new Date(event.dateStart).getFullYear()));
    if (!checkMonth) {
      results.push({ month: monthstart, events: [event], year: new Date(event.dateStart).getFullYear() });
      return;
    }
    checkMonth.events.push(event);
  });
  return results;
}

export function renderDates(dateStart, dateEnd) {
  const allMonths = moment.months();
  const startDay = moment(dateStart).date();
  const endDay = moment(dateEnd).date();
  const startYear = moment(dateStart).year();
  const endYear = moment(dateEnd).year();
  const endMonth = allMonths[new Date(dateEnd).getMonth()];
  const sameMonth = allMonths[new Date(dateStart).getMonth()] === allMonths[new Date(dateEnd).getMonth()];

  if (startYear !== endYear) {
    return (
      <>
        {allMonths[new Date(dateStart).getMonth()]} {startDay}, {startYear} - {allMonths[new Date(dateEnd).getMonth()]} {endDay}, {endYear}
      </>
    );
  }
  if (startDay === endDay) {
    return (
      <>
        {allMonths[new Date(dateStart).getMonth()]} {startDay}, {startYear}
      </>
    );
  }
  return (
    <>
      {allMonths[new Date(dateStart).getMonth()]} {startDay} - {sameMonth ? endDay : `${endMonth} ${endDay}` }, {startYear}
    </>
  );
}
