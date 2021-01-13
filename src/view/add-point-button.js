import AbstractView from '../view/abstract.js';

const createAddPointButton = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

export default class AddPointButton extends AbstractView {
  constructor() {
    super();
    this._addClickHandler = this._addClickHandler.bind(this);
  }
  getTemplate() {
    return createAddPointButton();
  }

  _addClickHandler(evt) {
    evt.preventDefault();
    this._callback.click();
  }
  setClickHandler(callback) {
    this._callback.click = callback;
    this.getElement().addEventListener(`click`, this._addClickHandler);
  }
}
