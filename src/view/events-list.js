import AbstractView from '../view/abstract.js';

const createEventsList = () => {
  return `<ul class="trip-events__list"></ul>`;
};

export default class EventList extends AbstractView {
  getTemplate() {
    return createEventsList();
  }
}
