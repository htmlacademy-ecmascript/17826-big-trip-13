import AbstractView from '../view/abstract.js';

const createTripEventsContainer = () => {
  return `<section class="trip-events"></section>`;
};

export default class TripEvents extends AbstractView {
  getTemplate() {
    return createTripEventsContainer();
  }
}
