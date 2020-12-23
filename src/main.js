import {RenderPosition, renderElement} from './utils/utils.js';
import HeaderInfoView from './view/info.js';
import HeaderCostView from './view/cost.js';
import SiteMenuView from './view/menu.js';
import SiteFiltersView from './view/filters.js';
import EventsSortView from './view/events-sort.js';
import EventListView from './view/events-list.js';
import PointView from './view/point.js';
import EditPointFormView from './view/edit-point.js';
import AddPointFormView from './view/add-point.js';
import {generatePoint} from './mock/point.js';

const POINTS_COUNT = 5;
const points = new Array(POINTS_COUNT).fill().map(generatePoint);
const sortedPoints = points.sort((a, b) => {
  if (a.date > b.date) {
    return 1;
  } if (a.date < b.date) {
    return -1;
  }
  return 0;
});

const headerContainer = document.querySelector(`.trip-main`);
const headerInfoElement = new HeaderInfoView().getElement();
renderElement(headerInfoElement, RenderPosition.AFTERBEGIN, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostElement = new HeaderCostView(sortedPoints).getElement();
renderElement(headerCostElement, RenderPosition.BEFOREEND, headerInfo);


const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuElement = new SiteMenuView().getElement();
renderElement(menuElement, RenderPosition.AFTERBEGIN, menuContainer);
const filtersForm = new SiteFiltersView().getElement();
renderElement(filtersForm, RenderPosition.BEFOREEND, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
const pointsSortForm = new EventsSortView().getElement();
renderElement(pointsSortForm, RenderPosition.BEFOREEND, pointsContainer);
const pointsListElement = new EventListView().getElement();
renderElement(pointsListElement, RenderPosition.BEFOREEND, pointsContainer);

const pointsList = pointsContainer.querySelector(`.trip-events__list`);
sortedPoints.forEach((point) => {
  const pointElement = new PointView(point).getElement();
  renderElement(pointElement, RenderPosition.BEFOREEND, pointsList);
});
const editPointForm = new EditPointFormView(sortedPoints[0]).getElement();
renderElement(editPointForm, RenderPosition.AFTERBEGIN, pointsList);

const addPointForm = new AddPointFormView(sortedPoints[sortedPoints.length - 1]).getElement();
renderElement(addPointForm, RenderPosition.BEFOREEND, pointsList);
