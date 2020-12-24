import {RenderPosition, render} from './utils/utils.js';
import HeaderInfoView from './view/info.js';
import HeaderCostView from './view/cost.js';
import SiteMenuView from './view/menu.js';
import SiteFiltersView from './view/filters.js';
import EventsSortView from './view/events-sort.js';
import EventListView from './view/events-list.js';
import PointView from './view/point.js';
import EditPointFormView from './view/edit-point.js';
import AddPointFormView from './view/add-point.js';
import NoPointsView from './view/no-points.js';
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
const headerInfoComponent = new HeaderInfoView();
const headerInfoElement = headerInfoComponent.getElement();
render(headerInfoElement, RenderPosition.AFTERBEGIN, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostComponent = new HeaderCostView(sortedPoints);
const headerCostElement = headerCostComponent.getElement();
render(headerCostElement, RenderPosition.BEFOREEND, headerInfo);


const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuComponent = new SiteMenuView();
const menuElement = menuComponent.getElement();
render(menuElement, RenderPosition.AFTERBEGIN, menuContainer);
const filtersComponent = new SiteFiltersView();
const filtersForm = filtersComponent.getElement();
render(filtersForm, RenderPosition.BEFOREEND, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
if (sortedPoints.length === 0) {
  const noPointsComponent = new NoPointsView();
  const noPointsElement = noPointsComponent.getElement();
  render(noPointsElement, RenderPosition.AFTERBEGIN, pointsContainer);
} else {
  const pointsSortFormComponent = new EventsSortView();
  const pointsSortForm = pointsSortFormComponent.getElement();
  render(pointsSortForm, RenderPosition.BEFOREEND, pointsContainer);
  const pointsListComponent = new EventListView();
  const pointsListElement = pointsListComponent.getElement();
  render(pointsListElement, RenderPosition.BEFOREEND, pointsContainer);

  const pointsList = pointsContainer.querySelector(`.trip-events__list`);
  sortedPoints.forEach((point) => {
    const pointsComponent = new PointView(point);
    const pointElement = pointsComponent.getElement();
    const editPointFormComponent = new EditPointFormView(point);
    const editPointForm = editPointFormComponent.getElement();
    render(pointElement, RenderPosition.BEFOREEND, pointsList);
    const replacePointToEditForm = () => {
      pointsList.replaceChild(editPointForm, pointElement);
    };
    const replaceEditFormToPoint = () => {
      pointsList.replaceChild(pointElement, editPointForm);
    };
    const rollUpButtonPoint = pointElement.querySelector(`.event__rollup-btn`);
    const rollUpButtonEditForm = editPointForm.querySelector(`.event__rollup-btn`);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Esc` || evt.key === `Escape`) {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    rollUpButtonPoint.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      replacePointToEditForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    rollUpButtonEditForm.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

    const editFormSubmitButton = editPointForm.querySelector(`.event__save-btn`);
    editFormSubmitButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
  });

  const addPointFormComponent = new AddPointFormView(sortedPoints[sortedPoints.length - 1]);
  const addPointForm = addPointFormComponent.getElement();
  const newEventButton = document.querySelector(`.trip-main__event-add-btn`);
  const onEscKeyDown = (evt) => {
    if (evt.key === `Esc` || evt.key === `Escape`) {
      evt.preventDefault();
      addPointForm.remove();
      addPointFormComponent.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  newEventButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    render(addPointForm, RenderPosition.AFTERBEGIN, pointsList);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
}
