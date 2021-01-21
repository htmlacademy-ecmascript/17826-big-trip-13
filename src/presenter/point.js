import PointView from '../view/point.js';
import EditPointFormView from '../view/edit-point.js';
import {render, RenderPosition, replace, remove} from '../utils/render.js';

const Mode = {
  DEFAULT: `DEFAULT`,
  EDITING: `EDITING`
};

export default class Points {
  constructor(pointsContainer, changeData, changeMode) {
    this._pointsContainer = pointsContainer;
    this._changeData = changeData;
    this._changeMode = changeMode;

    this._pointComponent = null;
    this._editPointFormComponent = null;
    this._mode = Mode.DEFAULT;

    this._setClickHandler = this._setClickHandler.bind(this);
    this._editFormEscHandler = this._editFormEscHandler.bind(this);
    this._setEditFormClickHandler = this._setEditFormClickHandler.bind(this);
    this._setEditFormSubmitHandler = this._setEditFormSubmitHandler.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
  }

  init(point) {
    this._point = point;
    const prevPointComponent = this._pointComponent;
    const prevEditPointFormComponent = this._editPointFormComponent;

    this._pointComponent = new PointView(point);
    this._editPointFormComponent = new EditPointFormView(point);

    this._pointComponent.setClickHandler(this._setClickHandler);
    this._editPointFormComponent.setEditFormClickHandler(this._setEditFormClickHandler);
    this._editPointFormComponent.setEditFormSubmitHandler(this._setEditFormSubmitHandler);
    this._pointComponent.setFavoriteClickHandler(this._handleFavoriteClick);

    if (prevPointComponent === null || prevEditPointFormComponent === null) {
      render(this._pointComponent, RenderPosition.AFTERBEGIN, this._pointsContainer);
      return;
    }
    if (this._mode === Mode.DEFAULT) {
      replace(this._pointComponent, prevPointComponent);
    }
    if (this._mode === Mode.EDITING) {
      replace(this._editPointFormComponent, prevEditPointFormComponent);
    }
    remove(prevPointComponent);
    remove(prevEditPointFormComponent);
  }
  destroy() {
    remove(this._pointComponent);
    remove(this._editPointFormComponent);
  }
  resetView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditFormToPoint();
    }
  }
  _replacePointToEditForm() {
    replace(this._editPointFormComponent, this._pointComponent);
    document.addEventListener(`keydown`, this._editFormEscHandler);
    this._changeMode();
    this._mode = Mode.EDITING;
  }
  _replaceEditFormToPoint() {
    replace(this._pointComponent, this._editPointFormComponent);
    document.removeEventListener(`keydown`, this._editFormEscHandler);
    this._mode = Mode.DEFAULT;
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
  _setEditFormSubmitHandler(point) {
    this._replaceEditFormToPoint();
    this._changeData(point);
  }
  _handleFavoriteClick() {
    this._changeData(
        Object.assign({}, this._point, {isFavorite: !this._point.isFavorite})
    );
  }
}
