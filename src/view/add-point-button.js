import AbstractView from '../view/abstract.js';

const createAddPointButton = () => {
  return `<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>`;
};

export default class AddPointButton extends AbstractView {
  constructor() {
    super();
    this._addButtonClickHandler = this._addButtonClickHandler.bind(this);
  }
  getTemplate() {
    return createAddPointButton();
  }

  _addButtonClickHandler(evt) {
    evt.preventDefault();
    this._callback.clickAddButton();
  }
  setAddButtonClickHandler(callback) {
    this._callback.clickAddButton = callback;
    this.getElement().addEventListener(`click`, this._addButtonClickHandler);
  }
}
