(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", "stencil-ion-action-sheet-ios-entry-js"],
        "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", "stencil-ion-action-sheet-md-entry-js"],
        "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", "stencil-ion-alert-ios-entry-js"],
        "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", "stencil-ion-alert-md-entry-js"],
        "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", "stencil-ion-app_8-ios-entry-js"],
        "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", "stencil-ion-app_8-md-entry-js"],
        "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", "stencil-ion-avatar_3-ios-entry-js"],
        "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", "stencil-ion-avatar_3-md-entry-js"],
        "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", "stencil-ion-back-button-ios-entry-js"],
        "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", "stencil-ion-back-button-md-entry-js"],
        "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", "stencil-ion-backdrop-ios-entry-js"],
        "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", "stencil-ion-backdrop-md-entry-js"],
        "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", "stencil-ion-button_2-ios-entry-js"],
        "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", "stencil-ion-button_2-md-entry-js"],
        "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", "stencil-ion-card_5-ios-entry-js"],
        "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", "stencil-ion-card_5-md-entry-js"],
        "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", "stencil-ion-checkbox-ios-entry-js"],
        "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", "stencil-ion-checkbox-md-entry-js"],
        "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", "stencil-ion-chip-ios-entry-js"],
        "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", "stencil-ion-chip-md-entry-js"],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", "stencil-ion-col_3-entry-js"],
        "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", "stencil-ion-datetime_3-ios-entry-js"],
        "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", "stencil-ion-datetime_3-md-entry-js"],
        "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", "stencil-ion-fab_3-ios-entry-js"],
        "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", "stencil-ion-fab_3-md-entry-js"],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", "stencil-ion-img-entry-js"],
        "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", "common", "stencil-ion-infinite-scroll_2-ios-entry-js"],
        "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", "common", "stencil-ion-infinite-scroll_2-md-entry-js"],
        "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", "stencil-ion-input-ios-entry-js"],
        "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", "stencil-ion-input-md-entry-js"],
        "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", "stencil-ion-item-option_3-ios-entry-js"],
        "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", "stencil-ion-item-option_3-md-entry-js"],
        "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", "stencil-ion-item_8-ios-entry-js"],
        "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", "stencil-ion-item_8-md-entry-js"],
        "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", "stencil-ion-loading-ios-entry-js"],
        "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", "stencil-ion-loading-md-entry-js"],
        "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", "stencil-ion-menu_3-ios-entry-js"],
        "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", "stencil-ion-menu_3-md-entry-js"],
        "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", "stencil-ion-modal-ios-entry-js"],
        "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", "stencil-ion-modal-md-entry-js"],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", "stencil-ion-nav_2-entry-js"],
        "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", "stencil-ion-popover-ios-entry-js"],
        "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", "stencil-ion-popover-md-entry-js"],
        "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", "stencil-ion-progress-bar-ios-entry-js"],
        "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", "stencil-ion-progress-bar-md-entry-js"],
        "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", "stencil-ion-radio_2-ios-entry-js"],
        "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", "stencil-ion-radio_2-md-entry-js"],
        "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", "stencil-ion-range-ios-entry-js"],
        "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", "stencil-ion-range-md-entry-js"],
        "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", "stencil-ion-refresher_2-ios-entry-js"],
        "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", "stencil-ion-refresher_2-md-entry-js"],
        "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", "stencil-ion-reorder_2-ios-entry-js"],
        "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", "stencil-ion-reorder_2-md-entry-js"],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", "stencil-ion-ripple-effect-entry-js"],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", "stencil-ion-route_4-entry-js"],
        "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", "stencil-ion-searchbar-ios-entry-js"],
        "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", "stencil-ion-searchbar-md-entry-js"],
        "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", "stencil-ion-segment_2-ios-entry-js"],
        "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", "stencil-ion-segment_2-md-entry-js"],
        "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", "stencil-ion-select_3-ios-entry-js"],
        "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", "stencil-ion-select_3-md-entry-js"],
        "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", "stencil-ion-slide_2-ios-entry-js"],
        "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", "stencil-ion-slide_2-md-entry-js"],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", "stencil-ion-spinner-entry-js"],
        "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", "stencil-ion-split-pane-ios-entry-js"],
        "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", "stencil-ion-split-pane-md-entry-js"],
        "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", "stencil-ion-tab-bar_2-ios-entry-js"],
        "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", "stencil-ion-tab-bar_2-md-entry-js"],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", "stencil-ion-tab_2-entry-js"],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", "stencil-ion-text-entry-js"],
        "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", "stencil-ion-textarea-ios-entry-js"],
        "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", "stencil-ion-textarea-md-entry-js"],
        "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", "stencil-ion-toast-ios-entry-js"],
        "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", "stencil-ion-toast-md-entry-js"],
        "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", "stencil-ion-toggle-ios-entry-js"],
        "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", "stencil-ion-toggle-md-entry-js"],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", "stencil-ion-virtual-scroll-entry-js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/item.model.ts":
    /*!*******************************************!*\
      !*** ./src/app/Pages/to-do/item.model.ts ***!
      \*******************************************/

    /*! exports provided: DayItem, Action */

    /***/
    function srcAppPagesToDoItemModelTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayItem", function () {
        return DayItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Action", function () {
        return Action;
      });

      var DayItem = function DayItem(name, startTime, endTime) {
        _classCallCheck(this, DayItem);

        this.name = name;
        this.startTime = startTime;
        this.endTime = endTime;
      };

      var Action = function Action(name, deadline, catagory, completed, catPos) {
        _classCallCheck(this, Action);

        this.name = name;
        this.deadline = deadline;
        this.catagory = catagory;
        this.completed = completed;
        this.catPos = catPos;
      };
      /***/

    },

    /***/
    "./src/app/Services/actions.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Services/actions.service.ts ***!
      \*********************************************/

    /*! exports provided: ActionsService */

    /***/
    function srcAppServicesActionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ActionsService", function () {
        return ActionsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../Pages/to-do/item.model */
      "./src/app/Pages/to-do/item.model.ts");
      /* harmony import */


      var _time_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./time.service */
      "./src/app/Services/time.service.ts");
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./storage.service */
      "./src/app/Services/storage.service.ts");

      var ActionsService = /*#__PURE__*/function () {
        function ActionsService(timeService, storageService) {
          _classCallCheck(this, ActionsService);

          this.timeService = timeService;
          this.storageService = storageService; // LOCAL STORAGE

          this.actions = []; // actions: Action [] = [
          //   new Action('today2', '2020-08-19', 'Free', false, 2),
          //   new Action('today1', '2020-08-19', 'Free', true, 0),
          //   new Action('another year', '2021-07-20', 'Work', false, 0),
          //   new Action('week2', '2020-08-20', 'Family', true, 0),
          //   new Action('week1', '2020-08-22', 'Family', false, 2),
          //   new Action('another year', '2021-07-20', 'Work', false, 1),
          //   new Action('today3', '2020-08-19', 'Free', false, 1),
          //   new Action('week3', '2020-08-23', 'Family', true, 1),
          //   new Action('another year', '2021-07-20', 'Work', false, 2),
          // ];

          this.currentActions = this.copyActions();
          this.catagories = ['None', 'Work', 'Free', 'Family'];
          this.selectedView = 'week';
          this.srtBy = 'date';
        } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // general helpful functions
        // returns a deep copy of the actions array


        _createClass(ActionsService, [{
          key: "copyActions",
          value: function copyActions() {
            var newy = [];

            var _iterator = _createForOfIteratorHelper(this.actions),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                var adding = {
                  name: i.name.slice(),
                  deadline: i.deadline.slice(),
                  catagory: i.catagory.slice(),
                  completed: i.completed,
                  catPos: i.catPos
                };
                newy.push(adding);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return newy;
          } // returns the current catagories

        }, {
          key: "getCata",
          value: function getCata() {
            return _toConsumableArray(this.catagories);
          } // returns the how many items there are in a given catagory

        }, {
          key: "getCatPos",
          value: function getCatPos(catagory) {
            var num = 0;

            var _iterator2 = _createForOfIteratorHelper(this.actions),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;

                if (i.catagory === catagory) {
                  num += 1;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return num;
          } //////////////////////////////////////// ** STUFF TO DO WITH THE ACTIONS ARRAY ** /////////////////////////////////////////////////
          // LOCAL STORAGE

        }, {
          key: "storeActions",
          value: function storeActions() {
            this.storageService.storeData(this.actions);
          } // LOCAL STORAGE

        }, {
          key: "fetchActions",
          value: function fetchActions() {
            var _this = this;

            this.storageService.retriveData().then(function (data) {
              _this.actions = data;
              console.log('actions fetched', data);
            });
          } // returns the master Actions Variable

        }, {
          key: "getActions",
          value: function getActions() {
            return _toConsumableArray(this.currentActions);
          } // Adds a new actions to possiton 0 in the Array

        }, {
          key: "addAction",
          value: function addAction(name, deadline, catagory, completed) {
            var adding = new _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__["Action"](name, deadline, catagory, completed, this.getCatPos(catagory));
            this.actions.splice(0, 0, adding);
            this.updateCurrent(); // LOCAL STORAGE

            this.storeActions();
          } // Removes the action that is passed into the array

        }, {
          key: "deleteAction",
          value: function deleteAction(action) {
            var _this2 = this;

            var index = this.actions.findIndex(function (x) {
              return _this2.checkActEq(x, action);
            });
            console.log('removing', index);
            console.log('actions', this.actions);
            this.actions.splice(index, 1); // LOCAL STORAGE

            this.storeActions();
          } // moves an actions from a posstion to another possiton

        }, {
          key: "moveAction",
          value: function moveAction(from, to) {
            var action = this.actions[from];
            this.actions.splice(from, 1);
            this.actions.splice(to, 0, action); // LOCAL STORAGE

            this.storeActions();
          } // checks if two arrays are equal in values

        }, {
          key: "checkActEq",
          value: function checkActEq(a, b) {
            if (a.name === b.name && a.deadline === b.deadline && a.catagory === b.catagory && a.completed === b.completed && a.catPos === b.catPos) {
              return true;
            } else {
              return false;
            }
          } // Updates an action

        }, {
          key: "updateAction",
          value: function updateAction(old, neww) {
            var _this3 = this;

            var index = this.actions.findIndex(function (x) {
              return _this3.checkActEq(x, old);
            });
            this.actions.splice(index, 1, neww);
            this.updateCurrent();
            console.log('current sate of actions', this.actions); // LOCAL STORAGE

            this.storeActions();
          } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // functions to do with the current selected view
          // these are the getters and setters for the selected view variable used by the popover
          // this returns the view(week, day, all) currently selected by the user

        }, {
          key: "getSelecView",
          value: function getSelecView() {
            return this.selectedView;
          } // this sets the selected view to a new value inputed into the function

        }, {
          key: "setSelecView",
          value: function setSelecView(newVal) {
            this.selectedView = newVal;
          } // function that updates the current actions in view when the main actions array is changed

        }, {
          key: "updateCurrent",
          value: function updateCurrent() {
            if (this.selectedView === 'all') {
              this.currentActions = this.copyActions();
            } else if (this.selectedView === 'day') {
              this.setDayView();
            } else {
              this.setWeekView();
            }

            if (this.srtBy === 'date') {
              this.srtByDate();
            } else if (this.srtBy === 'catagory') {
              this.srtByCata();
            }
          } // sets the curent actions varaible to the actions just for the current day, runs when day view is selected

        }, {
          key: "setDayView",
          value: function setDayView() {
            var _this4 = this;

            var results = this.actions.filter(function (x) {
              return x.deadline === _this4.timeService.getDate();
            });
            this.currentActions = results;
          } // this function sets the currentActions array to the just the days of the current week

        }, {
          key: "setWeekView",
          value: function setWeekView() {
            var weekAry = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            var week = this.timeService.getWeekRange();
            var results = this.copyActions().filter(function (x) {
              return week.includes(x.deadline);
            });
            this.currentActions = results;
          } // this function changes items possitions within a catagory

        }, {
          key: "moveCatagory",
          value: function moveCatagory(cata, from, too) {
            var posAry = [];
            var ordered = [];

            var _iterator3 = _createForOfIteratorHelper(this.actions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _i = _step3.value;

                if (_i.catagory === cata) {
                  posAry.push(_i.catPos);
                }
              } // created the ordered array

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            for (var i = 0; i < posAry.length; i++) {
              ordered.push(i);
            } // this part creates the new order and assigns it to the curent list of actions


            ordered.splice(from, 1);
            ordered.splice(too, 0, from);

            var _iterator4 = _createForOfIteratorHelper(this.actions),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _i2 = _step4.value;

                if (_i2.catagory === cata) {
                  var newPos = ordered.indexOf(_i2.catPos);
                  this.actions[this.actions.indexOf(_i2)].catPos = newPos;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // sorting functions
          // getter for the srtBy variable

        }, {
          key: "getSrt",
          value: function getSrt() {
            return this.srtBy;
          } // setter for the srtBy variable

        }, {
          key: "setSrt",
          value: function setSrt(newSrt) {
            this.srtBy = newSrt;
          } // 1 - sorts the currentActions array by date low to high;

        }, {
          key: "srtByDate",
          value: function srtByDate() {
            // Declarations
            var dateVal = []; // array filled with the values for the dates

            var newCurentActions = []; // aray filled with the current actions in the new order
            // this for loop creates a array of the values of the dates by adding the year, month and day together

            var _iterator5 = _createForOfIteratorHelper(this.currentActions),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var i = _step5.value;
                var deadline = i.deadline.split('-');
                var deadNum = parseInt(deadline[0] + deadline[1] + deadline[2], 10);
                dateVal.splice(dateVal.length, 0, deadNum);
              } // this section sorts the date into low to high date

            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            var dateValCop = dateVal.slice();
            dateValCop.sort(function (a, b) {
              if (a < b) {
                return -1;
              } else if (a > b) {
                return 1;
              } else {
                return 0;
              }
            }); // this section creates a new array of actions in the correct order and assigns it to the currentActions array

            var _iterator6 = _createForOfIteratorHelper(dateValCop),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _i3 = _step6.value;
                var oldIndex = dateVal.indexOf(_i3);
                var newIndex = dateValCop.indexOf(_i3);
                dateVal[oldIndex] = null;
                dateValCop[newIndex] = null;
                var adding = {
                  name: this.currentActions[oldIndex].name.slice(),
                  deadline: this.currentActions[oldIndex].deadline.slice(),
                  catagory: this.currentActions[oldIndex].catagory.slice(),
                  completed: this.currentActions[oldIndex].completed,
                  catPos: this.currentActions[oldIndex].catPos
                };
                newCurentActions.splice(newIndex, 0, adding);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            this.currentActions = newCurentActions;
          }
        }, {
          key: "srtByCata",
          value: function srtByCata() {
            var _this5 = this;

            var newAry = [null]; // This section splits the catagories into seperate arrays

            var _iterator7 = _createForOfIteratorHelper(this.catagories),
                _step7;

            try {
              var _loop = function _loop() {
                var i = _step7.value;

                var filtered = _this5.currentActions.filter(function (x) {
                  return x.catagory === i;
                });

                newAry.push(filtered);
              };

              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            newAry.splice(0, 1); // This section orderes each catagory array

            for (var _i4 = 0, _newAry = newAry; _i4 < _newAry.length; _i4++) {
              var i = _newAry[_i4];
              newAry[newAry.indexOf(i)].sort(function (a, b) {
                if (a.catPos < b.catPos) {
                  return -1;
                } else if (a.catPos > b.catPos) {
                  return 1;
                } else {
                  return 0;
                }
              });
            } // This section creates the new array fully ordered and replaces the currentActions with it


            var replacingAry = [];

            for (var _i5 = 0, _newAry2 = newAry; _i5 < _newAry2.length; _i5++) {
              var x = _newAry2[_i5];

              var _iterator8 = _createForOfIteratorHelper(x),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var y = _step8.value;
                  replacingAry.push(y);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }

            this.currentActions = replacingAry;
            return newAry;
          }
        }]);

        return ActionsService;
      }();

      ActionsService.ctorParameters = function () {
        return [{
          type: _time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"]
        }, {
          type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
        }];
      };

      ActionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_time_service__WEBPACK_IMPORTED_MODULE_3__["TimeService"], _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]])], ActionsService);
      /***/
    },

    /***/
    "./src/app/Services/storage.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/Services/storage.service.ts ***!
      \*********************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

      var StorageService = /*#__PURE__*/function () {
        function StorageService(nativeStorage) {
          _classCallCheck(this, StorageService);

          this.nativeStorage = nativeStorage;
        }

        _createClass(StorageService, [{
          key: "storeData",
          value: function storeData(storing) {
            this.nativeStorage.setItem('stored', storing).then(function () {
              return console.log('Stored item!', storing);
            }, function (error) {
              return console.error('Error storing item', error);
            });
          }
        }, {
          key: "retriveData",
          value: function retriveData() {
            return this.nativeStorage.getItem('stored');
          }
        }]);

        return StorageService;
      }();

      StorageService.ctorParameters = function () {
        return [{
          type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
        }];
      };

      StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]])], StorageService);
      /***/
    },

    /***/
    "./src/app/Services/time.service.ts":
    /*!******************************************!*\
      !*** ./src/app/Services/time.service.ts ***!
      \******************************************/

    /*! exports provided: TimeService */

    /***/
    function srcAppServicesTimeServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TimeService", function () {
        return TimeService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TimeService = /*#__PURE__*/function () {
        function TimeService() {
          _classCallCheck(this, TimeService);

          // used by getWeekRange to determine the current day
          this.week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
          this.week2 = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        } // This is called to start the timer


        _createClass(TimeService, [{
          key: "startTimer",
          value: function startTimer() {
            var timeUpdate = window.setInterval(this.updateTime, 1000);
          } // This is thee function that is reacalled by the start timer function to update the time

        }, {
          key: "updateTime",
          value: function updateTime() {
            var d = new Date();
            this.time = d.getHours().toString() + ':' + d.getMinutes().toString();
            console.log(this.time);
          } // returns the current date in the format 'YYYY-MM-DD'

        }, {
          key: "getDate",
          value: function getDate() {
            var currentDate = new Date();
            var date = currentDate.getDate().toString();
            var month = (currentDate.getMonth() + 1).toString(); // checks if the month needs a 0 in and if date needs a 0 in front of it and creates the date variable ;

            if (month.length === 1) {
              month = '0' + month;
            }

            if (date.length === 1) {
              date = '0' + date;
            }

            var year = currentDate.getFullYear();
            date = year + '-' + month + '-' + date;
            return date;
          } // returns the range of the current week as a array of days from the date of monday to the date of sunday

        }, {
          key: "getWeekRange",
          value: function getWeekRange() {
            var monday;
            var range = [];
            var currentDate = new Date();
            var day = this.week[currentDate.getDay()];
            var pos = this.week2.indexOf(day);

            if (pos === 0) {
              monday = this.getDate();
            } else {
              monday = this.minusFromDate(this.getDate(), pos);
            }

            range[0] = monday;

            for (var i = 1; i <= 6; i++) {
              range.push(this.addToDate(monday, i));
            }

            return range;
          } // enter year and it returns true for leap and false for not leap Year

        }, {
          key: "leapYear",
          value: function leapYear(year) {
            return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
          } // this function adds however many days you input(adding) onto the date you input(date) format = string 'YYYY-MM-DD'

        }, {
          key: "addToDate",
          value: function addToDate(date, adding) {
            date = date.split('-');
            date[1] = parseInt(date[1], 10).toString(); // this removes the 0 from the front fo the month date if there is one

            var leap = this.leapYear(parseInt(date[0], 10)); // this while loop adds the a day to the date every time it runs taking into acount end of months, years and leap years

            while (adding !== 0) {
              if (date[2] === '28' && date[1] === '2' && !leap || date[2] === '29' && date[1] === '2' && leap || date[2] === '30' && (date[1] === '4' || date[1] === '6' || date[1] === '9' || date[1] === '11') || date[2] === '31' && !(date[1] === '12')) {
                // runs at the end of months
                date[1] = (parseInt(date[1], 10) + 1).toString();
                date[2] = '1';
              } else if (date[2] === '31' && date[1] === '12') {
                // runs when adding day to the last day of the year
                date[0] = (parseInt(date[0], 10) + 1).toString();
                date[1] = '1';
                date[2] = '1';
              } else {
                // runs for any other date
                date[2] = (parseInt(date[2], 10) + 1).toString();
              }

              adding -= 1;
            } // puts the 0's back in front of the single digit numbers eg ['2020','7','2'] => ['2020','07','02']


            var _iterator9 = _createForOfIteratorHelper(date),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var i = _step9.value;

                if (parseInt(i, 10) < 10) {
                  date[date.indexOf(i)] = '0' + i;
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }

            return date[0] + '-' + date[1] + '-' + date[2];
          } // returns a new date after minusing days in format string 'YYYY-MM-DD'

        }, {
          key: "minusFromDate",
          value: function minusFromDate(date, minusing) {
            date = date.split('-');
            date[1] = parseInt(date[1], 10).toString(); // this removes the 0 from the front fo the month date if there is one

            date[2] = parseInt(date[2], 10).toString();
            var leap = this.leapYear(parseInt(date[0], 10));

            while (minusing !== 0) {
              if (date[2] === '1' && date[1] === '3') {
                // runs if minusing from last day in march
                date[1] = '2';

                if (leap) {
                  date[2] = '29';
                } else {
                  date[2] = '28';
                }
              } else if (date[2] === '1' && (date[1] === '5' || date[1] === '7' || date[1] === '10' || date[1] === '12')) {
                date[1] = (parseInt(date[1], 10) - 1).toString();
                date[2] = '30';
              } else if (date[2] === '1' && date[1] === '1') {
                date[0] = (parseInt(date[0], 10) - 1).toString();
                date[1] = '12';
                date[2] = '31';
              } else if (date[2] === '1') {
                date[1] = (parseInt(date[1], 10) - 1).toString();
                date[2] = '31';
              } else {
                date[2] = (parseInt(date[2], 10) - 1).toString();
              }

              minusing -= 1;
            } // puts the 0's back in front of the single digit numbers eg ['2020','7','2'] => ['2020','07','02']


            var _iterator10 = _createForOfIteratorHelper(date),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var i = _step10.value;

                if (parseInt(i, 10) < 10) {
                  date[date.indexOf(i)] = '0' + i;
                }
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }

            return date[0] + '-' + date[1] + '-' + date[2];
          }
        }, {
          key: "dayToDate",
          value: function dayToDate(day) {
            var pos = this.week2.indexOf(day);
            var date = this.getWeekRange()[pos];
            return date;
          }
        }, {
          key: "dateToDay",
          value: function dateToDay(date) {
            var weekRange = this.getWeekRange();
            var pos = weekRange.indexOf(date);
            var day = this.week2[pos];
            return day;
          } // turn string date into the date that should be displayed

        }, {
          key: "dateToDisplay",
          value: function dateToDisplay(date) {
            var jvDate = new Date(date);
            var week = this.getWeekRange();

            if (week.includes(date)) {
              return jvDate.toLocaleDateString(undefined, {
                weekday: 'long'
              });
            } else {
              return jvDate.toLocaleDateString(undefined, {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              });
            }
          }
        }]);

        return TimeService;
      }();

      TimeService.ctorParameters = function () {
        return [];
      };

      TimeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], TimeService);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [{
        path: '',
        redirectTo: 'to-do',
        pathMatch: 'full'
      }, {
        path: 'to-do',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Pages-to-do-to-do-module */
          "Pages-to-do-to-do-module").then(__webpack_require__.bind(null,
          /*! ./Pages/to-do/to-do.module */
          "./src/app/Pages/to-do/to-do.module.ts")).then(function (m) {
            return m.ToDoPageModule;
          });
        }
      }, {
        path: 'add-activ',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Pages-add-activ-add-activ-module */
          "default~Pages-add-activ-add-activ-module~day-view-day-view-module").then(__webpack_require__.bind(null,
          /*! ./Pages/add-activ/add-activ.module */
          "./src/app/Pages/add-activ/add-activ.module.ts")).then(function (m) {
            return m.AddActivPageModule;
          });
        }
      }, {
        path: 'add-action',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Pages-add-action-add-action-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./Pages/add-action/add-action.module */
          "./src/app/Pages/add-action/add-action.module.ts")).then(function (m) {
            return m.AddActionPageModule;
          });
        }
      }, {
        path: 'pop-over',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Pages-pop-over-pop-over-module */
          "common").then(__webpack_require__.bind(null,
          /*! ./Pages/pop-over/pop-over.module */
          "./src/app/Pages/pop-over/pop-over.module.ts")).then(function (m) {
            return m.PopOverPageModule;
          });
        }
      }, {
        path: 'test-page',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | Pages-test-page-test-page-module */
          "Pages-test-page-test-page-module").then(__webpack_require__.bind(null,
          /*! ./Pages/test-page/test-page.module */
          "./src/app/Pages/test-page/test-page.module.ts")).then(function (m) {
            return m.TESTPAGEPageModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _Services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./Services/time.service */
      "./src/app/Services/time.service.ts");
      /* harmony import */


      var _Services_actions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./Services/actions.service */
      "./src/app/Services/actions.service.ts");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, timeService, actionsService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.timeService = timeService;
          this.actionsService = actionsService;
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this6 = this;

            this.platform.ready().then(function () {
              _this6.statusBar.styleDefault();

              _this6.splashScreen.hide();
            });
            this.platform.ready().then(function () {
              // LOCAL STORAGE
              _this6.actionsService.fetchActions();
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]
        }, {
          type: _Services_actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"], _Services_actions_service__WEBPACK_IMPORTED_MODULE_6__["ActionsService"]])], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/native-storage/ngx */
      "./node_modules/@ionic-native/native-storage/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_9__["NativeStorage"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: 'AIzaSyCZCQZ4ruZUvJxzrN30P7KgHBjuagAtk98',
          authDomain: 'daily-planner-a8d75.firebaseapp.com',
          databaseURL: 'https://daily-planner-a8d75.firebaseio.com',
          projectId: 'daily-planner-a8d75',
          storageBucket: 'daily-planner-a8d75.appspot.com',
          messagingSenderId: '432013082546',
          appId: '1:432013082546:web:d13324dbaa489efb09eeab',
          measurementId: 'G-BSJRST9GQM'
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/willmoran/Documents/Codeing/DailyPlanner/Dialy-Planner/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map