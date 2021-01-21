import dayjs from 'dayjs';

const pointsSortDate = (a, b) => {
  return dayjs(a.date).diff(dayjs(b.date));
};

const pointsSortDuration = (a, b) => {
  // const durationA = dayjs(a.endTime).diff(dayjs(a.startTime));
  // const durationA = dayjs(a.endTime).diff(dayjs(a.startTime, `minute`));
  // const durationB = dayjs(b.endTime).diff(dayjs(b.startTime));
  // console.log(durationA);
  // return;


  if (dayjs(a.endTime).diff(a.startTime) < dayjs(b.endTime).diff(b.startTime)) {
    return 1;
  }
  if (dayjs(a.endTime).diff(a.startTime) > dayjs(b.endTime).diff(b.startTime)) {
    return -1;
  }
  return 0;
};

const pointsSortPrice = (a, b) => {
  return a.price - b.price;
};

export {
  pointsSortDate,
  pointsSortDuration,
  pointsSortPrice
};
