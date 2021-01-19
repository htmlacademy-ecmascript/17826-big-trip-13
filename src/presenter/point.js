import PointView from '../view/point.js';
import EditPointFormView from '../view/edit-point.js';
import {render, RenderPosition, replace, remove} from '../utils/render.js';

export default class Points {
  constructor(pointsContainer) {
    this._pointsContainer = pointsContainer;
    this._pointComponent = null;
    this._editPointFormComponent = null;

    this._setClickHandler = this._setClickHandler.bind(this);
    this._editFormEscHandler = this._editFormEscHandler.bind(this);
    this._setEditFormClickHandler = this._setEditFormClickHandler.bind(this);
    this._setEditFormSubmitHandler = this._setEditFormSubmitHandler.bind(this);
  }

  init(point) {
    this._points = point;

    const prevPointComponent = this._pointComponent;
    const prevEditPointFormComponent = this._editPointFormComponent;

    this._pointComponent = new PointView(point);
    this._editPointFormComponent = new EditPointFormView(point);

    this._pointComponent.setClickHandler(this._setClickHandler);
    this._editPointFormComponent.setEditFormClickHandler(this._setEditFormClickHandler);
    this._editPointFormComponent.setEditFormSubmitHandler(this._setEditFormSubmitHandler);

    if (prevPointComponent === null || prevEditPointFormComponent === null) {
      render(this._pointComponent, RenderPosition.AFTERBEGIN, this._pointsContainer);
      return;
    }
    if (this._pointsContainer.getElement().contains(prevPointComponent.getElement())) {
      replace(this._editPointFormComponent, prevEditPointFormComponent);
    }
    if (this._pointsContainer.getElement().contains(prevPointComponent.getElement())) {
      replace(this._editPointFormComponent, prevEditPointFormComponent);
    }
    remove(prevPointComponent);
    remove(prevEditPointFormComponent);
  }
  _destroy() {
    remove(this._pointComponent);
    remove(this._editPointFormComponent);
  }
  _replacePointToEditForm() {
    replace(this._editPointFormComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._editFormEscHandler);
  }
  _replaceEditFormToPoint() {
    replace(this._pointComponent, this._editPointFormComponent);
    document.removeEventListener(`keydown`, this._editFormEscHandler);
  }
  _editFormEscHandler(evt) {
    if (evt.key === `Esc` || evt.key === `Escape`) {
      evt.preventDefault();
      this._replaceEditFormToPoint();
    }
  }
  _setClickHandler() {
    this._replacePointToEditForm();
  }

  _setEditFormClickHandler() {
    this._replaceEditFormToPoint();
  }
  _setEditFormSubmitHandler() {
    this._replaceEditFormToPoint();
  }
}
