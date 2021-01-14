import dayjs from 'dayjs';
import {citiesList, offersList} from '../mock/point.js';
import AbstractView from '../view/abstract.js';

const createPointCitiesTemplate = (cities) => {
  return cities.reduce((total, current) => total + `<option value="${current}"></option>`, `<datalist id="destination-list-1">`) + `</datalist>`;
};

const createPointDateTemplate = (timeStart, timeEnd) => {
  return `<div class="event__field-group  event__field-group--time">
  <label class="visually-hidden" for="event-start-time-1">From</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text"
  name="event-start-time" value="${dayjs(timeStart).format(`DD/MM/YY HH:mm`)}">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">To</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text"
  name="event-end-time" value="${dayjs(timeEnd).format(`DD/MM/YY HH:mm`)}">
  </div>`;
};

const createPointDescriptionTemplate = (description) => {
  if (description.length > 0) {
    return description.reduce((total, current) => total + current + ` `, `<p class="event__destination-description">`) + `</p>`;
  }
  return ``;
};

const createPointPhotosTemplate = (photos) => {
  if (photos.length > 0) {
    return photos.reduce((total, current) => total + `<img class="event__photo" src="${current}.jpg" alt="Event photo">`,
        `<div class="event__photos-container"><div class="event__photos-tape">`) + `</div></div>`;
  }
  return ``;
};

const createPointOffersTemplate = (defaultOffers, checkedOffers) => {
  if (checkedOffers.length > 0) {
    return defaultOffers.reduce((total, current) => total +
    `<div class="event__offer-selector">
       <input class="event__offer-checkbox  visually-hidden" id="event-offer-${current.id}" type="checkbox" name="event-offer-${current.id}" ${checkedOffers.includes(current) ? `checked` : ``}>
       <label class="event__offer-label" for="event-offer-${current.id}">
         <span class="event__offer-title">${current.name}</span>
         &plus;&euro;&nbsp;
         <span class="event__offer-price">${current.cost}</span>
       </label>
     </div>`,
    `<section class="event__section  event__section--offers">
         <h3 class="event__section-title  event__section-title--offers">Offers</h3>
         <div class="event__available-offers">`) + `</div></section>`;
  }
  return ``;
};

const createAddPointForm = (point = {}) => {

  const {type, city, timeStart, timeEnd, price, offers} = point;
  const {description, photos} = point.destination;

  const citiesTemplate = createPointCitiesTemplate(citiesList);
  const dateTemplate = createPointDateTemplate(timeStart, timeEnd);
  const offersTemplate = createPointOffersTemplate(offersList, offers);
  const descriptionTemplate = createPointDescriptionTemplate(description);
  const photosTemplate = createPointPhotosTemplate(photos);

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>

            <div class="event__type-item">
              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-transport-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="transport">
              <label class="event__type-label  event__type-label--transport" for="event-type-transport-1">Transport</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
            </div>

            <div class="event__type-item">
              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
            </div>
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${type}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${city}" list="destination-list-1">
          ${citiesTemplate}
      </div>
        ${dateTemplate}
      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          &euro;
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      ${offersTemplate}
      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          ${descriptionTemplate}
          ${photosTemplate}
        </section>
      </section>
    </section>
  </form>
</li>`;
};

export default class AddPointForm extends AbstractView {
  constructor(point) {
    super();
    this._point = point;
  }
  getTemplate() {
    return createAddPointForm(this._point);
  }
}
