import {RenderPosition, render, remove} from '../utils/render.js';
import TripInfoView from '../view/trip-info.js';
import HeaderInfoView from '../view/header-info.js';
import HeaderCostView from '../view/cost.js';
import TripControlsView from '../view/trip-controls.js';
import MenuView from '../view/menu.js';
import FiltersView from '../view/filters.js';
import AddPointButtonView from '../view/add-point-button.js';
import TripEventsView from '../view/trip-events.js';
import EventsSortView from '../view/events-sort.js';
import EventsListView from '../view/events-list.js';
import NoPointsView from '../view/no-points.js';
import AddPointFormView from '../view/add-point.js';
import {generatePoint} from '../mock/point.js';
import PointPresenter from './point.js';

const MainPointsElement = document.querySelector(`.page-main .page-body__container`);

export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._tripInfo = new TripInfoView();
    this._headerInfo = new HeaderInfoView();
    this._tripControls = new TripControlsView();
    this._menu = new MenuView();
    this._filters = new FiltersView();
    this._addPointButton = new AddPointButtonView();
    this._tripEvents = new TripEventsView();
    this._eventsList = new EventsListView();
    this._noPoints = new NoPointsView();
    this._eventsSort = new EventsSortView();
  }

  init(points) {
    this._points = points;
    this._renderTripInfo();
    this._renderTripControls();
    this._renderAddPointButton();
    this._renderTripEvents();

    this._renderPoints();
    this._renderAddPointForm();
  }
  _renderTripInfo() {
    render(this._tripInfo, RenderPosition.BEFOREEND, this._tripContainer);
    this._renderHeaderInfo();
    this._renderHeaderCost();
  }
  _renderHeaderInfo() {
    render(this._headerInfo, RenderPosition.AFTERBEGIN, this._tripInfo);
  }
  _renderHeaderCost() {
    this._headerCost = new HeaderCostView(this._points);
    render(this._headerCost, RenderPosition.BEFOREEND, this._tripInfo);
  }
  _renderTripControls() {
    render(this._tripControls, RenderPosition.BEFOREEND, this._tripContainer);
    this._renderMenu();
    this._renderFilters();
  }
  _renderMenu() {
    render(this._menu, RenderPosition.AFTERBEGIN, this._tripControls);
  }
  _renderFilters() {
    render(this._filters, RenderPosition.BEFOREEND, this._tripControls);
  }
  _renderAddPointButton() {
    render(this._addPointButton, RenderPosition.BEFOREEND, this._tripContainer);

    const addFormEscHandler = (evt) => {
      if (evt.key === `Esc` || evt.key === `Escape`) {
        evt.preventDefault();
        remove(this._addPointForm);
        document.removeEventListener(`keydown`, addFormEscHandler);
      }
    };

    this._addPointButton.setClickHandler(() => {
      if (this._points === 0) {
        render(this._addPointForm, RenderPosition.AFTERBEGIN, this._tripEvents);
      }
      render(this._addPointForm, RenderPosition.AFTERBEGIN, this._eventsList);
      document.addEventListener(`keydown`, addFormEscHandler);
    });
  }
  _renderTripEvents() {
    render(this._tripEvents, RenderPosition.AFTERBEGIN, MainPointsElement);
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
    const pointPresenter = new PointPresenter(this._eventsList);
    pointPresenter.init(point);
  }
  _renderPoints() {
    this._points.forEach((point) => {
      this._renderPoint(point);
    });
  }

  _renderAddPointForm() {
    this._addPointForm = new AddPointFormView(generatePoint());
  }
}
