import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {pointTypes, citiesList} from './mock/point.js';

const DEFAULT_POINT = {
  id: nanoid(),
  date: dayjs(),
  type: pointTypes[0],
  city: citiesList[0],
  timeStart: dayjs().format(`DD/MM/YY HH:mm`),
  timeEnd: dayjs().format(`DD/MM/YY HH:mm`),
  price: ``,
  offers: ``,
  destination: ``
};

const SORT_TYPE = {
  DAY: `sort-day`,
  EVENT: `sort-event`,
  TIME: `sort-time`,
  PRICE: `sort-price`,
  OFFER: `sort-offer`
};

export {
  DEFAULT_POINT,
  SORT_TYPE
};
