import {RenderPosition, render, replace, remove} from './utils/render.js';
import HeaderInfoView from './view/header-info.js';
import HeaderCostView from './view/cost.js';
import MenuView from './view/menu.js';
import FiltersView from './view/filters.js';
import EventsSortView from './view/events-sort.js';
import AddPointButtonView from './view/add-point-button.js';
import EventsListView from './view/events-list.js';
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
render(headerInfoComponent, RenderPosition.AFTERBEGIN, headerContainer);

const addPointButtonComponent = new AddPointButtonView();
render(addPointButtonComponent, RenderPosition.BEFOREEND, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostComponent = new HeaderCostView(sortedPoints);
render(headerCostComponent, RenderPosition.BEFOREEND, headerInfo);


const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuComponent = new MenuView();
render(menuComponent, RenderPosition.AFTERBEGIN, menuContainer);
const filtersComponent = new FiltersView();
render(filtersComponent, RenderPosition.BEFOREEND, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
const addPointFormComponent = new AddPointFormView(generatePoint());

const addFormEscHandler = (evt) => {
  if (evt.key === `Esc` || evt.key === `Escape`) {
    evt.preventDefault();
    remove(addPointFormComponent);
    document.removeEventListener(`keydown`, addFormEscHandler);
  }
};
if (sortedPoints.length === 0) {
  const noPointsComponent = new NoPointsView();
  render(noPointsComponent, RenderPosition.AFTERBEGIN, pointsContainer);

  addPointButtonComponent.setClickHandler(() => {
    render(addPointFormComponent, RenderPosition.AFTERBEGIN, pointsContainer);
    document.addEventListener(`keydown`, addFormEscHandler);
  });
} else {
  const eventsSortComponent = new EventsSortView();
  render(eventsSortComponent, RenderPosition.BEFOREEND, pointsContainer);
  const pointsListComponent = new EventsListView();
  render(pointsListComponent, RenderPosition.BEFOREEND, pointsContainer);

  sortedPoints.forEach((point) => {
    const pointComponent = new PointView(point);
    const editPointFormComponent = new EditPointFormView(point);
    render(pointComponent, RenderPosition.BEFOREEND, pointsListComponent);

    addPointButtonComponent.setClickHandler(() => {
      render(addPointFormComponent, RenderPosition.AFTERBEGIN, pointsListComponent);
      document.addEventListener(`keydown`, addFormEscHandler);
    });

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
  });

}
