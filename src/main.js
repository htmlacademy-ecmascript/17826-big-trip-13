import TripPresenter from './presenter/trip.js';
import {generatePoint} from './mock/point.js';

const POINTS_COUNT = 5;
const points = new Array(POINTS_COUNT).fill().map(generatePoint);

const MainHeaderElement = document.querySelector(`.trip-main`);
const MainPointsElement = document.querySelector(`.page-main .page-body__container`);

const TripMenu = new TripPresenter(MainHeaderElement, MainPointsElement);
TripMenu.init(points);
