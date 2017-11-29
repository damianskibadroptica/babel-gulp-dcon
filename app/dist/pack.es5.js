'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	var helper = __webpack_require__(1);
	var footer = __webpack_require__(2);
	var header = __webpack_require__(3);
	var button = __webpack_require__(4);
	var Car = __webpack_require__(5);

	footer();
	header();
	button();

	var car = new Car('Volkswagen', 'Passat B5 FL', '1.9 TDI');
	helper.append('<hr /Class:<br />');
	helper.append('Brand: ' + car.getBrand() + '<br />');
	helper.append('Model: ' + car.getModel() + '<br />');
	helper.append('Engine: ' + car.getEngine() + '<br />');
	helper.append(car.showDetails() + '<br />');

	/***/
},
/* 1 */
/***/function (module, exports) {

	module.exports = {
		append: function append(text) {
			document.body.innerHTML += text;
		},

		clear: function clear() {
			document.body.innerHTML = '';
		}
	};

	/***/
},
/* 2 */
/***/function (module, exports, __webpack_require__) {

	var helper = __webpack_require__(1);
	module.exports = function () {
		helper.append('jakieś funkcje z footer.js<br />');
	};

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	var helper = __webpack_require__(1);
	module.exports = function () {
		helper.append('jakieś funkcje z header.js<br />');
	};

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	var helper = __webpack_require__(1);
	module.exports = function () {
		helper.append('jakieś funkcje z button.js<br />');
	};

	/***/
},
/* 5 */
/***/function (module, exports) {

	module.exports = function () {
		function _class(brand, model, engine) {
			_classCallCheck(this, _class);

			this.brand = brand;
			this.model = model;
			this.engine = engine;
		}

		_createClass(_class, [{
			key: 'getBrand',
			value: function getBrand() {
				return this.brand;
			}
		}, {
			key: 'getModel',
			value: function getModel() {
				return this.model;
			}
		}, {
			key: 'getEngine',
			value: function getEngine() {
				return this.engine;
			}
		}, {
			key: 'showDetails',
			value: function showDetails() {
				return this.brand + " " + this.model + " " + this.engine;
			}
		}]);

		return _class;
	}();

	/***/
}]
/******/);