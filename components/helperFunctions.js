/* eslint-disable import/prefer-default-export */
import React from 'react';
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
