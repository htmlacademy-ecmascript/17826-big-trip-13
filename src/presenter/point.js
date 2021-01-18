import TripEventsView from '../view/trip-events.js';
import EventsSortView from '../view/events-sort.js';
import AddPointButtonView from '../view/add-point-button.js';
import EventsListView from '../view/events-list.js';
import PointView from '../view/point.js';
import EditPointFormView from '../view/edit-point.js';
import AddPointFormView from '../view/add-point.js';
import NoPointsView from '../view/no-points.js';
import {render, RenderPosition, replace, remove} from '../utils/render.js';
import {generatePoint} from '../mock/point.js';

export default class Points {
  constructor(pointsContainer) {
    this._pointsContainer = pointsContainer;
    this._tripEvents = new TripEventsView();
    this._eventsList = new EventsListView();
    this._noPoints = new NoPointsView();
    this._eventsSort = new EventsSortView();
    this._addPointButton = new AddPointButtonView();
    this._addPointForm = new AddPointFormView();
  }

  init(points) {
    this._points = points;
    this._renderTripEvents();
    this._renderPoints();
  }
  _renderTripEvents() {
    render(this._tripEvents, RenderPosition.AFTERBEGIN, this._pointsContainer);
    if (this._points.length === 0) {
      this._renderNoPoints();
    } else {
      this._renderEventsSort();
      this._renderEventsList();
    }
  }
  _renderEventsSort() {
    render(this._eventsSort, RenderPosition.AFTERBEGIN, this._tripEvents);
  }
  _renderEventsList() {
    render(this._eventsList, RenderPosition.BEFOREEND, this._tripEvents);
  }
  _renderNoPoints() {
    render(this._noPoints, RenderPosition.AFTERBEGIN, this._tripEvents);
  }
  _renderPoint(point) {
    const pointComponent = new PointView(point);
    const editPointFormComponent = new EditPointFormView(point);

    const replacePointToEditForm = () => {
      replace(editPointFormComponent, pointComponent);
    };
    const replaceEditFormToPoint = () => {
      replace(pointComponent, editPointFormComponent);
    };
    const editFormEscHandler = (evt) => {
      if (evt.key === `Esc` || evt.key === `Escape`) {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener(`keydown`, editFormEscHandler);
      }
    };
    pointComponent.setClickHandler(() => {
      replacePointToEditForm();
      document.addEventListener(`keydown`, editFormEscHandler);
    });

    editPointFormComponent.setEditFormClickHandler(() => {
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, editFormEscHandler);
    });
    editPointFormComponent.setEditFormSubmitHandler(() => {
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, editFormEscHandler);
    });

    render(pointComponent, RenderPosition.AFTERBEGIN, this._eventsList);
  }
  _renderPoints() {
    this._points.forEach((point) => {
      this._renderPoint(point);
    });
  }
  _renderAddPointForm() {
    this._addPointForm = new AddPointFormView(generatePoint());

    const addFormEscHandler = (evt) => {
      if (evt.key === `Esc` || evt.key === `Escape`) {
        evt.preventDefault();
        remove(this._addPointForm);
        document.removeEventListener(`keydown`, addFormEscHandler);
      }
    };

    this._addPointForm.addPointButton.setClickHandler(() => {
      if (this._points === 0) {
        render(this._addPointForm, RenderPosition.AFTERBEGIN, this._tripEvents);
      }
      render(this._addPointForm, RenderPosition.AFTERBEGIN, this._eventsList);
      document.addEventListener(`keydown`, addFormEscHandler);
    });
  }
}
