import {RenderPosition, render} from '../utils/render.js';
import TripInfoView from '../view/trip-info.js';
import HeaderInfoView from '../view/header-info.js';
import HeaderCostView from '../view/cost.js';
import TripControlsView from '../view/trip-controls.js';
import MenuView from '../view/menu.js';
import FiltersView from '../view/filters.js';
import AddPointButtonView from '../view/add-point-button.js';


export default class Trip {
  constructor(tripContainer) {
    this._tripContainer = tripContainer;
    this._tripInfo = new TripInfoView();
    this._headerInfo = new HeaderInfoView();
    this._tripControls = new TripControlsView();
    this._menu = new MenuView();
    this._filters = new FiltersView();
    this._addPointButton = new AddPointButtonView();
  }

  init(points) {
    this._points = points;
    this._renderTripInfo();
    this._renderTripControls();
    this._renderAddPointButton();
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
  }
}
