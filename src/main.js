import {createInfo} from './view/info.js';
import {createCost} from './view/cost.js';
import {createMenu} from './view/menu.js';
import {createFilters} from './view/filters.js';
import {createEventsSort} from './view/events-sort.js';
import {createEventsList} from './view/events-list.js';
import {createEvent} from './view/event.js';
import {editPoint} from './view/edit-point.js';
import {addPoint} from './view/add-point.js';

const EVENTS_COUNT = 4;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};
const tripHeader = document.querySelector(`.trip-main`);
render(tripHeader, createInfo(), `afterbegin`);

const tripInfo = tripHeader.querySelector(`.trip-info`);
render(tripInfo, createCost(), `beforeend`);

const tripMenu = tripHeader.querySelector(`.trip-controls`);
render(tripMenu, createMenu(), `afterbegin`);
render(tripMenu, createFilters(), `beforeend`);

const tripEvents = document.querySelector(`.trip-events`);
render(tripEvents, createEventsSort(), `beforeend`);
render(tripEvents, createEventsList(), `beforeend`);

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);
for (let i = 0; i < EVENTS_COUNT; i++) {
  render(tripEventsList, createEvent(), `beforeend`);
}
render(tripEventsList, editPoint(), `afterbegin`);
render(tripEventsList, addPoint(), `beforeend`);
