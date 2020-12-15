const render = (template, place, container) => {
  if (container) {
    container.insertAdjacentHTML(place, template);
  }
};

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export {
  render,
  getRandomInteger,
  getRandomItem,
};
