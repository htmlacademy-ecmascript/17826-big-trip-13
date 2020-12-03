import dayjs from 'dayjs';
import {
  getRandomInteger,
  getRandomElement,
} from '../utils/utils.js';

const MAX_DATE_GAP = 14;
const MAX_TIME_GAP = 300;
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const MAX_LENGTH_DESCRIPTION = 5;
const MAX_COUNT_PHOTOS = 5;

const generateDate = () => {
  const daysGap = getRandomInteger(-MAX_DATE_GAP, MAX_DATE_GAP);
  return dayjs().add(daysGap, `day`).toDate();
};

const generateTime = () => {
  const timeGap = getRandomInteger(-MAX_TIME_GAP, MAX_TIME_GAP);
  return dayjs().add(timeGap, `minute`).toDate();
};

const typesPoint = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const cities = [`Казань`, `Рига`, `Прага`, `Мюнхен`];

const offersList = [
  {
    id: `luggage`,
    name: `Добавить багаж`,
    cost: 50
  },
  {
    id: `comfort`,
    name: `Повышенный комфорт`,
    cost: 80
  },
  {
    id: `meal`,
    name: `Добавить питание`,
    cost: 15
  },
  {
    id: `seats`,
    name: `Выбор места`,
    cost: 5
  },
  {
    id: `train`,
    name: `Путешествие на поезде`,
    cost: 40
  },
];
const generateOffers = () => {
  return getRandomElement(offersList);
};

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const generateDescription = () => {
  return getRandomElement(description);
};

const photos = [
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`
];
const generatePhotos = () => {
  return getRandomElement(photos);
};
const generatePoint = () => {
  const date = generateDate();
  const type = getRandomElement(typesPoint);
  const city = getRandomElement(cities);
  const timeStart = generateTime();
  const timeEnd = dayjs(timeStart).add(getRandomInteger(0, MAX_TIME_GAP), `minute`).toDate();
  const offers = new Array(getRandomInteger(0, offersList.length)).fill().map(generateOffers);
  const randomDescription = new Array(getRandomInteger(0, MAX_LENGTH_DESCRIPTION)).fill().map(generateDescription);
  const randomPhotos = new Array(getRandomInteger(0, MAX_COUNT_PHOTOS)).fill().map(generatePhotos);

  return {
    date,
    type,
    city,
    timeStart,
    timeEnd,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    offers,
    isFavorite: Boolean(getRandomInteger(0, 1)),
    destination: {
      description: randomDescription,
      photos: randomPhotos,
    }
  };
};
export {cities, offersList, generatePoint};
