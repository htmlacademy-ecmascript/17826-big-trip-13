import dayjs from 'dayjs';

const pointsSortDate = (a, b) => {
  return dayjs(a.date).diff(dayjs(b.date));
};

const pointsSortDuration = (a, b) => {
  const durationA = dayjs(a.timeEnd).diff(a.timeStart, `minute`);
  const durationB = dayjs(b.timeEnd).diff(b.timeStart, `minute`);
  return durationA - durationB;
};

const pointsSortPrice = (a, b) => {
  return a.price - b.price;
};

export {
  pointsSortDate,
  pointsSortDuration,
  pointsSortPrice
};
