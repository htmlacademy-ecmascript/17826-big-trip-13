import AbstractView from '../view/abstract.js';

const createTripInfoContainer = () => {
  return `<section class="trip-main__trip-info  trip-info"></section>`;
};

export default class TripInfo extends AbstractView {
  getTemplate() {
    return createTripInfoContainer();
  }
}
