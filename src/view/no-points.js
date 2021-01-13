import AbstractView from '../view/abstract.js';

const createNoPoinstTemplate = () => {
  return `<div>
  <h2 class="visually-hidden">Trip events</h2>
  <p class="trip-events__msg">Click New Event to create your first point</p>
  </div>`;
};

export default class NoPoints extends AbstractView {
  getTemplate() {
    return createNoPoinstTemplate();
  }
}
