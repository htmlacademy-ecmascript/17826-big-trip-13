import {citiesList} from '../mock/point.js';
import AbstractView from '../view/abstract.js';

const createInfo = () => {
  let cities = citiesList.reduce((total, current) => total + ` &mdash; ` + current);
  if (citiesList.length > 3) {
    cities = citiesList[0] + ` &mdash; ... &mdash; ` + citiesList[citiesList.length - 1];
  }
  return `<div class="trip-info__main">
  <h1 class="trip-info__title">${cities}</h1>
  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>`;
};

export default class HeaderInfo extends AbstractView {
  getTemplate() {
    return createInfo();
  }
}
