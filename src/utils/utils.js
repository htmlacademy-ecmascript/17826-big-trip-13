const render = (template, place, container) => {
  if (container) {
    container.insertAdjacentHTML(place, template);
  }
  return;
};

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getRandomArr = (arr) => {
  let length = getRandomInteger(0, arr.length);
  let newArr = [];
  for (let i = 0; i < length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

export {
  render,
  getRandomInteger,
  getRandomElement,
  getRandomArr
};
