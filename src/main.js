import {createTripInfo} from './view/info.js';
import {createTripCost} from './view/cost.js';
import {createTripMenu} from './view/menu.js';
import {createTripFilters} from './view/filters.js';
import {createTripEventsSort} from './view/events-sort.js';
import {createTripEventsList} from './view/events-list.js';
import {createTripEvent} from './view/event.js';
import {editTripPoint} from './view/edit-point.js';
import {addTripPoint} from './view/add-point.js';

const EVENT_COUNT = 4;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const tripHeader = document.querySelector(`.trip-main`);
render(tripHeader, createTripInfo(), `afterbegin`);

const tripInfo = tripHeader.querySelector(`.trip-info`);
render(tripInfo, createTripCost(), `beforeend`);

const tripMenu = tripHeader.querySelector(`.trip-controls`);
render(tripMenu, createTripMenu(), `afterbegin`);
render(tripMenu, createTripFilters(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createTripEventsSort(), `beforeend`);
render(tripEvents, createTripEventsList(), `beforeend`);

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < EVENT_COUNT; i++) {
  render(tripEventsList, createTripEvent(), `beforeend`);
}
render(tripEventsList, editTripPoint(), `afterbegin`);
render(tripEventsList, addTripPoint(), `beforeend`);
