import {createElement} from '../utils/utils.js';
import {citiesList} from '../mock/point.js';

const createInfo = () => {
  let cities = citiesList.reduce((total, current) => total + ` &mdash; ` + current);
  if (citiesList.length > 3) {
    cities = citiesList[0] + ` &mdash; ... &mdash; ` + citiesList[citiesList.length - 1];
  }
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
  <h1 class="trip-info__title">${cities}</h1>
  <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>
  </section>`;
};

export default class HeaderInfo {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createInfo();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}
