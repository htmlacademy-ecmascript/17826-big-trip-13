import {createElement} from '../utils/utils.js';

const createEventsList = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class EventList {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createEventsList();
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
