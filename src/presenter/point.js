// import {RenderPosition, render, replace, remove} from './utils/render.js';
import EventsSortView from './view/events-sort.js';
import AddPointButtonView from './view/add-point-button.js';
import EventsListView from './view/events-list.js';
import PointView from './view/point.js';
import EditPointFormView from './view/edit-point.js';
import AddPointFormView from './view/add-point.js';
// import {generatePoint} from './mock/point.js';

export default class Point {
  constructor() {
    this._eventsSort = new EventsSortView();
    this._addPointButton = new AddPointButtonView();
    this._eventList = new EventsListView();
    this._point = new PointView();
    this._editPointForm = new EditPointFormView();
    this._addPointForm = new AddPointFormView();
  }

  _renderEventsSort() {

  }
  _renderAddPointButton() {

  }
  _renderEventsList() {

  }
  _renderPoint() {

  }
  _renderEditPointForm() {

  }
  _renderAddPointForm() {

  }
}
