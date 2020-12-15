import {render} from './utils/utils.js';
import {createInfo} from './view/info.js';
import {createHeaderCost} from './view/cost.js';
import {createMenu} from './view/menu.js';
import {createFiltersForm} from './view/filters.js';
import {createEventsSortForm} from './view/events-sort.js';
import {createEventsList} from './view/events-list.js';
import {createPoint} from './view/point.js';
import {createEditPointForm} from './view/edit-point.js';
import {createAddPointForm} from './view/add-point.js';
import {generatePoint} from './mock/point.js';

const POINTS_COUNT = 15;
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
const headerInfoElement = createInfo();
render(headerInfoElement, `afterbegin`, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostElement = createHeaderCost(sortedPoints);
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
sortedPoints.forEach((point) => {
  const pointElement = createPoint(point);
  render(pointElement, `beforeend`, pointsList);
});
const editPointForm = createEditPointForm(sortedPoints[0]);
render(editPointForm, `afterbegin`, pointsList);

const addPointForm = createAddPointForm(sortedPoints[sortedPoints.length - 1]);
render(addPointForm, `beforeend`, pointsList);
