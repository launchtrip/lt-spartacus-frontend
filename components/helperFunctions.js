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
  return res;
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
    Paid: <EventIcon image="/assets/icon-paid.png" height="1em" width="10px" marginRight="7px" />,
    Virtual: <EventIcon image="/assets/icon-virtual.png" height="1em" width="15px" marginRight="7px" />,
    'In Person': <EventIcon image="/assets/icon-inperson.png" height="1em" width="15px" marginRight="7px" />,
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
