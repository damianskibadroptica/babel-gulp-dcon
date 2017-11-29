/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	let helper = __webpack_require__(1);
	let footer = __webpack_require__(2);
	let header = __webpack_require__(3);
	let button = __webpack_require__(4);
	let Car = __webpack_require__(5);

	footer();
	header();
	button();


	let car = new Car('Volkswagen', 'Passat B5 FL', '1.9 TDI');
	helper.append('<hr /Class:<br />')
	helper.append('Brand: ' + car.getBrand() + '<br />');
	helper.append('Model: ' + car.getModel() + '<br />');
	helper.append('Engine: ' + car.getEngine() + '<br />');
	helper.append(car.showDetails() + '<br />');


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  append: function (text) {
	    document.body.innerHTML += text;
	  },

	  clear: function () {
	    document.body.innerHTML = '';
	  }
	};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	let helper = __webpack_require__(1);
	module.exports = function () {
	  helper.append('jakieś funkcje z footer.js<br />');
	};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	let helper = __webpack_require__(1);
	module.exports = function () {
	  helper.append('jakieś funkcje z header.js<br />');
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	let helper = __webpack_require__(1);
	module.exports = function () {
	  helper.append('jakieś funkcje z button.js<br />');
	};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = class {
	  constructor(brand, model, engine) {
	    this.brand = brand;
	    this.model = model;
	    this.engine = engine;
	  }

	  getBrand() {
	    return this.brand;
	  }

	  getModel() {
	    return this.model;
	  }

	  getEngine() {
	    return this.engine;
	  }

	  showDetails() {
	    return this.brand + " " + this.model + " " + this.engine;
	  }
	};


/***/ })
/******/ ]);