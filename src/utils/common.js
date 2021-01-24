const getRandomInteger = (min, max) => min + Math.floor(Math.random() * (max + 1 - min));

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const updatedItem = (items, update) => {
  const index = items.findIndex((item) => item.id === update.id);
  if (index === -1) {
    return items;
  }
  return items.splice(index, 1, update);
};
const makeFirstLatterUppercase = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

export {
  getRandomInteger,
  getRandomItem,
  updatedItem,
  makeFirstLatterUppercase
};
