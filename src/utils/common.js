const getRandomInteger = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const updatedItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);
  if (index === -1) {
    return items;
  }
  return items.splice(index, 1, update);
};

export {
  getRandomInteger,
  getRandomItem,
  updatedItem,
};
