// import {RenderPosition, render} from './utils/render.js';
import HeaderInfoView from './view/header-info.js';
import HeaderCostView from './view/cost.js';
import MenuView from './view/menu.js';
import FiltersView from './view/filters.js';
import NoPointsView from './view/no-points.js';

export default class Trip {
  constructor() {
    this._headerInfo = new HeaderInfoView();
    this._headerCost = new HeaderCostView();
    this._menu = new MenuView();
    this._filters = new FiltersView();
    this.noPoints = new NoPointsView();
  }

  _renderHeaderInfo() {

  }
  _renderHeaderCost() {

  }
  _renderMenu() {

  }
  _renderFilters() {

  }
  _renderNoPoints() {

  }
}
