import {render} from './utils/utils.js';
import {createInfo} from './view/info.js';
import {createCost} from './view/cost.js';
import {createMenu} from './view/menu.js';
import {createFiltersForm} from './view/filters.js';
import {createEventsSortForm} from './view/events-sort.js';
import {createEventsList} from './view/events-list.js';
import {createPoint} from './view/point.js';
import {createEditPointForm} from './view/edit-point.js';
import {createAddPointForm} from './view/add-point.js';
import {generatePoint} from './mock/point.js';

const POINTS_COUNT = 3;
const points = new Array(POINTS_COUNT).fill().map(generatePoint);

const headerContainer = document.querySelector(`.trip-main`);
const headerInfoElement = createInfo();
render(headerInfoElement, `afterbegin`, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostElement = createCost(points);
render(headerCostElement, `beforeend`, headerInfo);

const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuElement = createMenu();
render(menuElement, `afterbegin`, menuContainer);
const filtersForm = createFiltersForm();
render(filtersForm, `beforeend`, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
const pointsSortForm = createEventsSortForm();
render(pointsSortForm, `beforeend`, pointsContainer);
const pointsListElement = createEventsList();
render(pointsListElement, `beforeend`, pointsContainer);

const pointsList = pointsContainer.querySelector(`.trip-events__list`);
points.forEach((point) => {
  const pointElement = createPoint(point);
  render(pointElement, `beforeend`, pointsList);
});
const editPointForm = createEditPointForm(points[0]);
render(editPointForm, `afterbegin`, pointsList);
for (let i = points.length - 1; i < points.length; i++) {
  const addPointForm = createAddPointForm(points[i]);
  render(addPointForm, `beforeend`, pointsList);
}
