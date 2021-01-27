import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {
  getRandomInteger,
  getRandomItem,
} from '../utils/common.js';

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

const pointTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const citiesList = [`Казань`, `Рига`, `Прага`, `Мюнхен`];

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
  return getRandomItem(offersList);
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
  return getRandomItem(description);
};

const photos = [
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`
];
const generatePhotos = () => {
  return getRandomItem(photos);
};
const generatePoint = () => {
  const id = nanoid();
  const date = generateDate();
  const type = getRandomItem(pointTypes);
  const city = getRandomItem(citiesList);
  const timeStart = date;
  const timeEnd = dayjs(timeStart).add(getRandomInteger(0, MAX_TIME_GAP), `minute`).toDate();
  const offers = new Array(getRandomInteger(0, offersList.length)).fill().map(generateOffers);
  const isFavorite = Boolean(getRandomInteger(0, 1));
  const randomDescription = new Array(getRandomInteger(0, MAX_LENGTH_DESCRIPTION)).fill().map(generateDescription);
  const randomPhotos = new Array(getRandomInteger(0, MAX_COUNT_PHOTOS)).fill().map(generatePhotos);

  return {
    id,
    date,
    type,
    city,
    timeStart,
    timeEnd,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    offers,
    isFavorite,
    destination: {
      description: randomDescription,
      photos: randomPhotos,
    }
  };
};
export {pointTypes, citiesList, offersList, generatePoint};
