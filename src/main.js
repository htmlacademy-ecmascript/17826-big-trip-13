import {RenderPosition, render} from './utils/render.js';
import HeaderInfoView from './view/header-info.js';
import HeaderCostView from './view/cost.js';
import MenuView from './view/menu.js';
import FiltersView from './view/filters.js';
import EventsSortView from './view/events-sort.js';
import AddPointButtonView from './view/add-point-button.js';
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

const addPointButtonComponent = new AddPointButtonView();
const addPointButtonElement = addPointButtonComponent.getElement();
render(addPointButtonElement, RenderPosition.BEFOREEND, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostComponent = new HeaderCostView(sortedPoints);
const headerCostElement = headerCostComponent.getElement();
render(headerCostElement, RenderPosition.BEFOREEND, headerInfo);


const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuComponent = new MenuView();
const menuElement = menuComponent.getElement();
render(menuElement, RenderPosition.AFTERBEGIN, menuContainer);
const filtersComponent = new FiltersView();
const filtersForm = filtersComponent.getElement();
render(filtersForm, RenderPosition.BEFOREEND, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
if (sortedPoints.length === 0) {
  const noPointsComponent = new NoPointsView();
  const noPointsElement = noPointsComponent.getElement();
  render(noPointsElement, RenderPosition.AFTERBEGIN, pointsContainer);
} else {
  const eventsSortComponent = new EventsSortView();
  const eventsSortForm = eventsSortComponent.getElement();
  render(eventsSortForm, RenderPosition.BEFOREEND, pointsContainer);
  const pointsListComponent = new EventListView();
  const pointsListElement = pointsListComponent.getElement();
  render(pointsListElement, RenderPosition.BEFOREEND, pointsContainer);

  sortedPoints.forEach((point) => {
    const pointComponent = new PointView(point);
    const pointElement = pointComponent.getElement();
    const editPointFormComponent = new EditPointFormView(point);
    const editPointFormElement = editPointFormComponent.getElement();
    render(pointElement, RenderPosition.BEFOREEND, pointsListElement);

    const replacePointToEditForm = () => {
      pointsListElement.replaceChild(editPointFormElement, pointElement);
    };
    const replaceEditFormToPoint = () => {
      pointsListElement.replaceChild(pointElement, editPointFormElement);
    };

    const onEscKeyDown = (evt) => {
      if (evt.key === `Esc` || evt.key === `Escape`) {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    pointComponent.setClickHandler(() => {
      replacePointToEditForm();
      document.addEventListener(`keydown`, onEscKeyDown);
    });

    editPointFormComponent.setEditFormClickHandler(() => {
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
    editPointFormComponent.setEditFormSubmitHandler(() => {
      replaceEditFormToPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    });
  });

  const addPointFormComponent = new AddPointFormView(sortedPoints[sortedPoints.length - 1]);
  const addPointForm = addPointFormComponent.getElement();

  const onEscKeyDown = (evt) => {
    if (evt.key === `Esc` || evt.key === `Escape`) {
      evt.preventDefault();
      addPointForm.remove();
      addPointFormComponent.removeElement();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  addPointButtonComponent.setClickHandler(() => {
    render(addPointForm, RenderPosition.AFTERBEGIN, pointsListElement);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
}
