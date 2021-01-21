const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const updateItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);
  if (index === -1) {
    return items;
  }
  return [
    ...items.slice(0, index),
    update,
    ...items.slice(index + 1)
  ];
};

export {
  getRandomInteger,
  getRandomItem,
  updateItem
};
