/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Common/Events/CommonEvent.ts":
/*!******************************************!*\
  !*** ./src/Common/Events/CommonEvent.ts ***!
  \******************************************/
/*! namespace exports */
/*! export CommonEvent [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonEvent": () => /* binding */ CommonEvent
/* harmony export */ });
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventDispatcher */ "./src/Common/Events/EventDispatcher.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CommonEvent = /** @class */ (function (_super) {
    __extends(CommonEvent, _super);
    function CommonEvent(type, value) {
        if (type === void 0) { type = null; }
        if (value === void 0) { value = null; }
        return _super.call(this, type, value) || this;
    }
    CommonEvent.MODEL_START_COMPLETE = "model_start_complete";
    return CommonEvent;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__.Event));



/***/ }),

/***/ "./src/Common/Events/EventDispatcher.ts":
/*!**********************************************!*\
  !*** ./src/Common/Events/EventDispatcher.ts ***!
  \**********************************************/
/*! namespace exports */
/*! export Event [provided] [no usage info] [missing usage info prevents renaming] */
/*! export EventDispatcher [provided] [no usage info] [missing usage info prevents renaming] */
/*! export EventListener [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventDispatcher": () => /* binding */ EventDispatcher,
/* harmony export */   "EventListener": () => /* binding */ EventListener,
/* harmony export */   "Event": () => /* binding */ Event
/* harmony export */ });
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.listeners = {};
    }
    EventDispatcher.prototype.dispatchEvent = function (event) {
        var e;
        var type;
        if (event instanceof Event) {
            type = event.type;
            e = event;
        }
        else {
            type = event;
            e = new Event(type);
        }
        if (this.listeners[type] != null) {
            e.currentTarget = this;
            for (var i = 0; i < this.listeners[type].length; i++) {
                var listener = this.listeners[type][i];
                try {
                    listener.handler(e);
                }
                catch (error) {
                    if (window.console) {
                        console.error(error.stack);
                    }
                }
            }
        }
    };
    EventDispatcher.prototype.addEventListener = function (type, callback, priolity) {
        if (priolity === void 0) { priolity = 0; }
        if (this.listeners[type] == null) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(new EventListener(type, callback, priolity));
        this.listeners[type].sort(function (listener1, listener2) {
            return listener2.priolity - listener1.priolity;
        });
    };
    EventDispatcher.prototype.removeEventListener = function (type, callback) {
        if (this.hasEventListener(type, callback)) {
            for (var i = 0; i < this.listeners[type].length; i++) {
                var listener = this.listeners[type][i];
                if (listener.equalCurrentListener(type, callback)) {
                    listener.handler = null;
                    this.listeners[type].splice(i, 1);
                    return;
                }
            }
        }
    };
    EventDispatcher.prototype.clearEventListener = function () {
        this.listeners = {};
    };
    EventDispatcher.prototype.containEventListener = function (type) {
        if (this.listeners[type] == null)
            return false;
        return this.listeners[type].length > 0;
    };
    EventDispatcher.prototype.hasEventListener = function (type, callback) {
        if (this.listeners[type] == null)
            return false;
        for (var i = 0; i < this.listeners[type].length; i++) {
            var listener = this.listeners[type][i];
            if (listener.equalCurrentListener(type, callback)) {
                return true;
            }
        }
        return false;
    };
    return EventDispatcher;
}());

var EventListener = /** @class */ (function () {
    function EventListener(type, handler, priolity) {
        if (type === void 0) { type = null; }
        if (handler === void 0) { handler = null; }
        if (priolity === void 0) { priolity = 0; }
        this.type = type;
        this.handler = handler;
        this.priolity = priolity;
    }
    EventListener.prototype.equalCurrentListener = function (type, handler) {
        if (this.type == type && this.handler == handler) {
            return true;
        }
        return false;
    };
    return EventListener;
}());

var Event = /** @class */ (function () {
    function Event(type, value) {
        if (type === void 0) { type = null; }
        if (value === void 0) { value = null; }
        this.type = type;
        this.value = value;
    }
    Event.COMPLETE = "complete";
    Event.CHANGE_PROPERTY = "changeProperty";
    return Event;
}());



/***/ }),

/***/ "./src/Controller/ControllerManager.ts":
/*!*********************************************!*\
  !*** ./src/Controller/ControllerManager.ts ***!
  \*********************************************/
/*! namespace exports */
/*! export ControllerManager [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControllerManager": () => /* binding */ ControllerManager
/* harmony export */ });
/* harmony import */ var _Common_Events_CommonEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Common/Events/CommonEvent */ "./src/Common/Events/CommonEvent.ts");
/* harmony import */ var _Model_ModelManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Model/ModelManager */ "./src/Model/ModelManager.ts");
;

var ControllerManager = /** @class */ (function () {
    function ControllerManager() {
        var handler = function () {
            console.log("ControllerManager handler");
        };
        var modelManager = _Model_ModelManager__WEBPACK_IMPORTED_MODULE_1__.ModelManager.getInstance();
        modelManager.addEventListener(_Common_Events_CommonEvent__WEBPACK_IMPORTED_MODULE_0__.CommonEvent.MODEL_START_COMPLETE, handler);
        modelManager.start();
    }
    return ControllerManager;
}());



/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! namespace exports */
/*! export Main [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => /* binding */ Main
/* harmony export */ });
/* harmony import */ var _Controller_ControllerManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller/ControllerManager */ "./src/Controller/ControllerManager.ts");
;
var Main = /** @class */ (function () {
    function Main() {
        var controllerManager = new _Controller_ControllerManager__WEBPACK_IMPORTED_MODULE_0__.ControllerManager();
    }
    return Main;
}());

window.addEventListener("load", function () {
    new Main();
});


/***/ }),

/***/ "./src/Model/ModelManager.ts":
/*!***********************************!*\
  !*** ./src/Model/ModelManager.ts ***!
  \***********************************/
/*! namespace exports */
/*! export ModelManager [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModelManager": () => /* binding */ ModelManager
/* harmony export */ });
/* harmony import */ var _Common_Events_CommonEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Common/Events/CommonEvent */ "./src/Common/Events/CommonEvent.ts");
/* harmony import */ var _Common_Events_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Common/Events/EventDispatcher */ "./src/Common/Events/EventDispatcher.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ModelManager = /** @class */ (function (_super) {
    __extends(ModelManager, _super);
    function ModelManager(block) {
        return _super.call(this) || this;
    }
    ModelManager.getInstance = function () {
        if (this._instance == null) {
            this._instance = new ModelManager(new SingletonBlock());
        }
        return this._instance;
    };
    ModelManager.prototype.start = function () {
        var _this = this;
        var handler = function () {
            _this.startComplete();
        };
        setTimeout(handler, 1000);
    };
    ModelManager.prototype.startComplete = function () {
        var event = new _Common_Events_CommonEvent__WEBPACK_IMPORTED_MODULE_0__.CommonEvent(_Common_Events_CommonEvent__WEBPACK_IMPORTED_MODULE_0__.CommonEvent.MODEL_START_COMPLETE);
        this.dispatchEvent(event);
    };
    return ModelManager;
}(_Common_Events_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__.EventDispatcher));

var SingletonBlock = /** @class */ (function () {
    function SingletonBlock() {
    }
    return SingletonBlock;
}());


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/Main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=ts.js.map