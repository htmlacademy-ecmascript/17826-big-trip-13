import AbstractView from '../view/abstract.js';

const createTripControlsContainer = () => {
  return `<div class="trip-main__trip-controls  trip-controls"></div>`;
};

export default class TripEvents extends AbstractView {
  getTemplate() {
    return createTripControlsContainer();
  }
}
