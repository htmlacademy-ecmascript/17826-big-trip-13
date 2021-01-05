import {createElement} from '../utils/utils.js';

const createHeaderCost = (points) => {
  const tripCost = 0;
  const offersCost = 0;

  const totalTripCost = points.reduce((total, current) => total + current.price, tripCost);

  const getTotalOffersCost = () => {
    let sumOffersCost = 0;
    points.forEach((point) => {
      const {offers} = point;
      sumOffersCost = offers.reduce((total, current) => total + current.cost, offersCost);
    });
    return sumOffersCost;
  };
  const totalOffersCost = getTotalOffersCost();

  const totalCost = totalTripCost + totalOffersCost;

  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
</p>`;
};

export default class HeaderCost {
  constructor(points) {
    this._points = points;
    this._element = null;
  }
  getTemplate() {
    return createHeaderCost(this._points);
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
