/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils.js */ "./src/utils/utils.js");
/* harmony import */ var _view_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/info.js */ "./src/view/info.js");
/* harmony import */ var _view_cost_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/cost.js */ "./src/view/cost.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_filters_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/filters.js */ "./src/view/filters.js");
/* harmony import */ var _view_events_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/events-sort.js */ "./src/view/events-sort.js");
/* harmony import */ var _view_events_list_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/events-list.js */ "./src/view/events-list.js");
/* harmony import */ var _view_point_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/point.js */ "./src/view/point.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/edit-point.js */ "./src/view/edit-point.js");
/* harmony import */ var _view_add_point_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/add-point.js */ "./src/view/add-point.js");
/* harmony import */ var _view_no_points_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/no-points.js */ "./src/view/no-points.js");
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mock/point.js */ "./src/mock/point.js");













const POINTS_COUNT = 5;
const points = new Array(POINTS_COUNT).fill().map(_mock_point_js__WEBPACK_IMPORTED_MODULE_11__["generatePoint"]);
const sortedPoints = points.sort((a, b) => {
  if (a.date > b.date) {
    return 1;
  } if (a.date < b.date) {
    return -1;
  }
  return 0;
});

const headerContainer = document.querySelector(`.trip-main`);
const headerInfoComponent = new _view_info_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const headerInfoElement = headerInfoComponent.getElement();
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(headerInfoElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, headerContainer);

const headerInfo = headerContainer.querySelector(`.trip-info`);
const headerCostComponent = new _view_cost_js__WEBPACK_IMPORTED_MODULE_2__["default"](sortedPoints);
const headerCostElement = headerCostComponent.getElement();
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(headerCostElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, headerInfo);


const menuContainer = headerContainer.querySelector(`.trip-controls`);
const menuComponent = new _view_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const menuElement = menuComponent.getElement();
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(menuElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, menuContainer);
const filtersComponent = new _view_filters_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
const filtersForm = filtersComponent.getElement();
Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(filtersForm, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, menuContainer);

const pointsContainer = document.querySelector(`.trip-events`);
if (sortedPoints.length === 0) {
  const noPointsComponent = new _view_no_points_js__WEBPACK_IMPORTED_MODULE_10__["default"]();
  const noPointsElement = noPointsComponent.getElement();
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(noPointsElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, pointsContainer);
} else {
  const pointsSortFormComponent = new _view_events_sort_js__WEBPACK_IMPORTED_MODULE_5__["default"]();
  const pointsSortForm = pointsSortFormComponent.getElement();
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(pointsSortForm, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, pointsContainer);
  const pointsListComponent = new _view_events_list_js__WEBPACK_IMPORTED_MODULE_6__["default"]();
  const pointsListElement = pointsListComponent.getElement();
  Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(pointsListElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, pointsContainer);

  const pointsList = pointsContainer.querySelector(`.trip-events__list`);
  sortedPoints.forEach((point) => {
    const pointsComponent = new _view_point_js__WEBPACK_IMPORTED_MODULE_7__["default"](point);
    const pointElement = pointsComponent.getElement();
    const editPointFormComponent = new _view_edit_point_js__WEBPACK_IMPORTED_MODULE_8__["default"](point);
    const editPointForm = editPointFormComponent.getElement();
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(pointElement, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].BEFOREEND, pointsList);
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

  const addPointFormComponent = new _view_add_point_js__WEBPACK_IMPORTED_MODULE_9__["default"](sortedPoints[sortedPoints.length - 1]);
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
    Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(addPointForm, _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["RenderPosition"].AFTERBEGIN, pointsList);
    document.addEventListener(`keydown`, onEscKeyDown);
  });
}


/***/ }),

/***/ "./src/mock/point.js":
/*!***************************!*\
  !*** ./src/mock/point.js ***!
  \***************************/
/*! exports provided: citiesList, offersList, generatePoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesList", function() { return citiesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offersList", function() { return offersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePoint", function() { return generatePoint; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");



const MAX_DATE_GAP = 14;
const MAX_TIME_GAP = 300;
const MIN_PRICE = 10;
const MAX_PRICE = 1000;
const MAX_LENGTH_DESCRIPTION = 5;
const MAX_COUNT_PHOTOS = 5;

const generateDate = () => {
  const daysGap = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(-MAX_DATE_GAP, MAX_DATE_GAP);
  return dayjs__WEBPACK_IMPORTED_MODULE_0___default()().add(daysGap, `day`).toDate();
};

const pointTypes = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check-in`, `Sightseeing`, `Restaurant`];
const citiesList = [`Казань`, `Рига`, `Прага`, `Мюнхен`];

const offersList = [
  {
    id: `luggage`,
    name: `Добавить багаж`,
    cost: 50
  },
  {
    id: `comfort`,
    name: `Повышенный комфорт`,
    cost: 80
  },
  {
    id: `meal`,
    name: `Добавить питание`,
    cost: 15
  },
  {
    id: `seats`,
    name: `Выбор места`,
    cost: 5
  },
  {
    id: `train`,
    name: `Путешествие на поезде`,
    cost: 40
  },
];
const generateOffers = () => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(offersList);
};

const description = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const generateDescription = () => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(description);
};

const photos = [
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`,
  `http://picsum.photos/248/152?r=${Math.random()}`
];
const generatePhotos = () => {
  return Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(photos);
};
const generatePoint = () => {
  const date = generateDate();
  const type = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(pointTypes);
  const city = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(citiesList);
  const timeStart = date;
  const timeEnd = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStart).add(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, MAX_TIME_GAP), `minute`).toDate();
  const offers = new Array(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, offersList.length)).fill().map(generateOffers);
  const randomDescription = new Array(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, MAX_LENGTH_DESCRIPTION)).fill().map(generateDescription);
  const randomPhotos = new Array(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, MAX_COUNT_PHOTOS)).fill().map(generatePhotos);

  return {
    date,
    type,
    city,
    timeStart,
    timeEnd,
    price: Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(MIN_PRICE, MAX_PRICE),
    offers,
    isFavorite: Boolean(Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomInteger"])(0, 1)),
    destination: {
      description: randomDescription,
      photos: randomPhotos,
    }
  };
};



/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: RenderPosition, render, renderTemplate, createElement, getRandomInteger, getRandomItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTemplate", function() { return renderTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItem", function() { return getRandomItem; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const renderTemplate = (template, place, container) => {
  if (container) {
    container.insertAdjacentHTML(place, template);
  }
};

const render = (element, place, container) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
};

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max + 1 - min));
};
const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};




/***/ }),

/***/ "./src/view/add-point.js":
/*!*******************************!*\
  !*** ./src/view/add-point.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddPointForm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");




const createPointCitiesTemplate = (cities) => {
  let str = ``;
  str += `<datalist id="destination-list-1">`;
  cities.forEach((city) => {
    str += `<option value="${city}"></option>`;
  });
  str += `</datalist>`;
  return str;
};

const createPointDateTemplate = (timeStart, timeEnd) => {
  return `<div class="event__field-group  event__field-group--time">
  <label class="visually-hidden" for="event-start-time-1">From</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text"
  name="event-start-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStart).format(`DD/MM/YY HH:mm`)}">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">To</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text"
  name="event-end-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeEnd).format(`DD/MM/YY HH:mm`)}">
  </div>`;
};

const createPointDescriptionTemplate = (description) => {
  let str = ``;
  if (description.length > 0) {
    str += `<p class="event__destination-description">`;
    description.forEach((item) => {
      str += item += ` `;
    });
    str += `</p>`;
  }
  return str;
};

const createPointPhotosTemplate = (photos) => {
  let str = ``;
  str += `<div class="event__photos-container">
  <div class="event__photos-tape">`;
  if (photos.length > 0) {
    photos.forEach((item) => {
      str += `<img class="event__photo" src="${item}.jpg" alt="Event photo">`;
    });
  }
  str += `</div>
  </div>`;
  return str;
};

const createPointOffersTemplate = (defaultOffers, checkedOffers) => {
  let str = ``;
  if (checkedOffers.length > 0) {
    str += `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">`;
    defaultOffers.forEach((offer) => {
      str += `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${checkedOffers.includes(offer) ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.cost}</span>
      </label>
    </div>`;
    });
    str += `</div></section>`;
  }
  return str;
};

const createAddPointForm = (point = {}) => {

  const {type, city, timeStart, timeEnd, price, offers} = point;
  const {description, photos} = point.destination;

  const citiesTemplate = createPointCitiesTemplate(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["citiesList"]);
  const dateTemplate = createPointDateTemplate(timeStart, timeEnd);
  const offersTemplate = createPointOffersTemplate(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["offersList"], offers);
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

class AddPointForm {
  constructor(point) {
    this._element = null;
    this._point = point;
  }
  getTemplate() {
    return createAddPointForm(this._point);
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/cost.js":
/*!**************************!*\
  !*** ./src/view/cost.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderCost; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createHeaderCost = (points) => {
  const tripCost = 0;
  const offersCost = 0;

  const totalTripCost = points.reduce((total, current) => total + current.price, tripCost);

  const getTotalOffersCost = () => {
    let sumOffersCost = 0;
    points.forEach((point) => {
      const {offers} = point;
      sumOffersCost = offers.reduce((total, current) => total + current.cost, offersCost);
    });
    return sumOffersCost;
  };
  const totalOffersCost = getTotalOffersCost();

  const totalCost = totalTripCost + totalOffersCost;

  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
</p>`;
};

class HeaderCost {
  constructor(points) {
    this._points = points;
    this._element = null;
  }
  getTemplate() {
    return createHeaderCost(this._points);
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditPointForm; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock_point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/point.js */ "./src/mock/point.js");
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");




const createPointCitiesTemplate = (cities) => {
  let str = ``;
  str += `<datalist id="destination-list-1">`;
  cities.forEach((city) => {
    str += `<option value="${city}"></option>`;
  });
  str += `</datalist>`;
  return str;
};

const createPointDateTemplate = (timeStart, timeEnd) => {
  return `<div class="event__field-group  event__field-group--time">
  <label class="visually-hidden" for="event-start-time-1">From</label>
  <input class="event__input  event__input--time" id="event-start-time-1" type="text"
  name="event-start-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStart).format(`DD/MM/YY HH:mm`)}">
  &mdash;
  <label class="visually-hidden" for="event-end-time-1">To</label>
  <input class="event__input  event__input--time" id="event-end-time-1" type="text"
  name="event-end-time" value="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeEnd).format(`DD/MM/YY HH:mm`)}">
  </div>`;
};

const createPointDescriptionTemplate = (description) => {
  let str = ``;
  if (description.length > 0) {
    str += `<p class="event__destination-description">`;
    description.forEach((item) => {
      str += item += ` `;
    });
    str += `</p>`;
  }
  return str;
};

const createPointOffersTemplate = (defaultOffers, checkedOffers) => {
  let str = ``;
  if (checkedOffers.length > 0) {
    str += `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">`;
    defaultOffers.forEach((offer) => {
      str += `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" ${checkedOffers.includes(offer) ? `checked` : ``}>
      <label class="event__offer-label" for="event-offer-${offer.id}">
        <span class="event__offer-title">${offer.name}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.cost}</span>
      </label>
    </div>`;
    });
    str += `</div></section>`;
  }
  return str;
};

const createEditPointForm = (point) => {
  const {type, city, timeStart, timeEnd, price, offers} = point;
  const {description} = point.destination;

  const citiesTemplate = createPointCitiesTemplate(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["citiesList"]);
  const dateTemplate = createPointDateTemplate(timeStart, timeEnd);
  const offersTemplate = createPointOffersTemplate(_mock_point_js__WEBPACK_IMPORTED_MODULE_1__["offersList"], offers);
  const descriptionTemplate = createPointDescriptionTemplate(description);

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
      <button class="event__reset-btn" type="reset">Delete</button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </header>
    <section class="event__details">
      ${offersTemplate}
      ${descriptionTemplate}
    </section>
  </form>
</li>`;
};

class EditPointForm {
  constructor(point) {
    this._element = null;
    this._point = point;
  }
  getTemplate() {
    return createEditPointForm(this._point);
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/events-list.js":
/*!*********************************!*\
  !*** ./src/view/events-list.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventList; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createEventsList = () => {
  return `<ul class="trip-events__list"></ul>`;
};

class EventList {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createEventsList();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/events-sort.js":
/*!*********************************!*\
  !*** ./src/view/events-sort.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsSort; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createEventsSortForm = () => {
  return `<div>
  <h2 class="visually-hidden">Trip events</h2>
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  <div class="trip-sort__item  trip-sort__item--day">
    <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>
    <label class="trip-sort__btn" for="sort-day">Day</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--event">
    <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
    <label class="trip-sort__btn" for="sort-event">Event</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--time">
    <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
    <label class="trip-sort__btn" for="sort-time">Time</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--price">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">
    <label class="trip-sort__btn" for="sort-price">Price</label>
  </div>

  <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
    <label class="trip-sort__btn" for="sort-offer">Offers</label>
  </div>
</form>
</div>`;
};

class EventsSort {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createEventsSortForm();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/filters.js":
/*!*****************************!*\
  !*** ./src/view/filters.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteFilters; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createFiltersForm = () => {
  return `<div>
  <h2 class="visually-hidden">Filter events</h2>
  <form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>
  </div>`;
};

class SiteFilters {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createFiltersForm();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/info.js":
/*!**************************!*\
  !*** ./src/view/info.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderInfo; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createInfo = () => {
  return `<section class="trip-main__trip-info  trip-info">
  <div class="trip-info__main">
    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

    <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
  </div>
</section>`;
};

class HeaderInfo {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createInfo();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createMenu = () => {
  return `<div>
  <h2 class="visually-hidden">Switch trip view</h2>
  <nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>
  </div>`;
};

class SiteMenu {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createMenu();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/no-points.js":
/*!*******************************!*\
  !*** ./src/view/no-points.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoPoints; });
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");


const createNoPoinstTemplate = () => {
  return `<div>
  <h2 class="visually-hidden">Trip events</h2>
  <p class="trip-events__msg">Click New Event to create your first point</p>
  </div>`;
};

class NoPoints {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createNoPoinstTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/point.js":
/*!***************************!*\
  !*** ./src/view/point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Point; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.js */ "./src/utils/utils.js");



const renderTemplateOffers = (offers) => {
  let str = ``;
  if (offers.length > 0) {
    offers.forEach((offer) => {
      str += `<li class="event__offer">
      <span class="event__offer-title">${offer.name}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${offer.cost}</span>
    </li>`;
    });
  }
  return str;
};

const createPoint = (point) => {
  const {date, type, city, timeStart, timeEnd, price, offers, isFavorite} = point;
  const title = `${type} ${city}`;

  const getDuration = (startTime, endTime) => {
    let str = ``;
    const diff = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTime).diff(startTime, `minute`);
    if (diff / 60 <= 0) {
      str += diff;
    }
    str += Math.trunc(diff / 60) + `H ` + (diff % 60) + `M`;
    return str;
  };
  const duration = getDuration(timeStart, timeEnd);

  const offersList = renderTemplateOffers(offers);

  const favoriteClassName = isFavorite
    ? `event__favorite-btn event__favorite-btn--active`
    : `event__favorite-btn`;

  return `<li class="trip-events__item">
  <div class="event">
    <time class="event__date" datetime="${date}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(date).format(`MMM DD`)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
    </div>
    <h3 class="event__title">${title}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${timeStart}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeStart).format(`HH:mm`)}</time>
        &mdash;
        <time class="event__end-time" datetime="${timeEnd}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(timeEnd).format(`HH:mm`)}</time>
      </p>
      <p class="event__duration">${duration}</p>
    </div>
    <p class="event__price">
      &euro;&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      ${offersList}
    </ul>
    <button class="${favoriteClassName}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>
</li>`;
};

class Point {
  constructor(point) {
    this._point = point;
    this._element = null;
  }
  getTemplate() {
    return createPoint(this._point);
  }
  getElement() {
    if (!this._element) {
      this._element = Object(_utils_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map