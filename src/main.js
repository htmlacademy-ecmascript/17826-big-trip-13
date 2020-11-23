import {render} from './view/utils.js';
import {createInfo} from './view/info.js';
import {createCost} from './view/cost.js';
import {createMenu} from './view/menu.js';
import {createFilters} from './view/filters.js';
import {createEventsSort} from './view/events-sort.js';
import {createEventsList} from './view/events-list.js';
import {createEvent} from './view/event.js';
import {editPoint} from './view/edit-point.js';
import {addPoint} from './view/add-point.js';

const EVENTS_COUNT = [1, 2, 3];

const headerContainer = document.querySelector(`.trip-main`);
render(createInfo(), `afterbegin`, headerContainer);

const headerTitle = headerContainer.querySelector(`.trip-info`);
render(createCost(), `beforeend`, headerTitle);

const menuContainer = headerContainer.querySelector(`.trip-controls`);
render(createMenu(), `afterbegin`, menuContainer);
render(createFilters(), `beforeend`, menuContainer);

const eventsContainer = document.querySelector(`.trip-events`);
render(createEventsSort(), `beforeend`, eventsContainer);
render(createEventsList(), `beforeend`, eventsContainer);

const eventsList = eventsContainer.querySelector(`.trip-events__list`);
EVENTS_COUNT.forEach(() => {
  render(createEvent(), `beforeend`, eventsList);
});
render(editPoint(), `afterbegin`, eventsList);
render(addPoint(), `beforeend`, eventsList);
