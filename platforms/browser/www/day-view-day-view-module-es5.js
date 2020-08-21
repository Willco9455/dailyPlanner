(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["day-view-day-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/day-view/day-view.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/day-view/day-view.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesToDoDayViewDayViewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-toolbar color='primary'>\n  <ion-title>Day Schedule</ion-title>\n</ion-toolbar>\n\n<ion-content>\n  <ion-list>\n    <div *ngFor='let item of day'>\n      <ion-item-sliding >\n        <ion-item>\n          <ion-label>{{ item.name }}</ion-label>\n          {{ item.startTime}} - {{item.endTime}}\n        </ion-item>\n\n        <ion-item-options>\n          <ion-item-option (click)='rmItem(item)' color=\"danger\">\n            <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n          </ion-item-option>\n        </ion-item-options>\n      </ion-item-sliding>\n    </div>\n  </ion-list>\n\n\n  <!--This creates a square so that the button does not cover important infomation-->\n  <div style=\"height: 80px\"></div>\n  <!--Button to add a new action-->\n  <ion-fab (click)=\"showModal()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/day-view/day-view-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/Pages/to-do/day-view/day-view-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DayViewPageRoutingModule */

    /***/
    function srcAppPagesToDoDayViewDayViewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayViewPageRoutingModule", function () {
        return DayViewPageRoutingModule;
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
      /* harmony import */


      var _day_view_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./day-view.page */
      "./src/app/Pages/to-do/day-view/day-view.page.ts");

      var routes = [{
        path: '',
        component: _day_view_page__WEBPACK_IMPORTED_MODULE_3__["DayViewPage"]
      }];

      var DayViewPageRoutingModule = function DayViewPageRoutingModule() {
        _classCallCheck(this, DayViewPageRoutingModule);
      };

      DayViewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DayViewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/day-view/day-view.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/Pages/to-do/day-view/day-view.module.ts ***!
      \*********************************************************/

    /*! exports provided: DayViewPageModule */

    /***/
    function srcAppPagesToDoDayViewDayViewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayViewPageModule", function () {
        return DayViewPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _day_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./day-view-routing.module */
      "./src/app/Pages/to-do/day-view/day-view-routing.module.ts");
      /* harmony import */


      var _day_view_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./day-view.page */
      "./src/app/Pages/to-do/day-view/day-view.page.ts");
      /* harmony import */


      var src_app_Pages_add_activ_add_activ_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/Pages/add-activ/add-activ.module */
      "./src/app/Pages/add-activ/add-activ.module.ts");
      /* harmony import */


      var _add_modal_add_modal_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../add-modal/add-modal.module */
      "./src/app/Pages/add-modal/add-modal.module.ts");

      var DayViewPageModule = function DayViewPageModule() {
        _classCallCheck(this, DayViewPageModule);
      };

      DayViewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _day_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["DayViewPageRoutingModule"], src_app_Pages_add_activ_add_activ_module__WEBPACK_IMPORTED_MODULE_7__["AddActivPageModule"], _add_modal_add_modal_module__WEBPACK_IMPORTED_MODULE_8__["AddModalPageModule"]],
        declarations: [_day_view_page__WEBPACK_IMPORTED_MODULE_6__["DayViewPage"]]
      })], DayViewPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/day-view/day-view.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/Pages/to-do/day-view/day-view.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesToDoDayViewDayViewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3RvLWRvL2RheS12aWV3L2RheS12aWV3LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/day-view/day-view.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/to-do/day-view/day-view.page.ts ***!
      \*******************************************************/

    /*! exports provided: DayViewPage */

    /***/
    function srcAppPagesToDoDayViewDayViewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayViewPage", function () {
        return DayViewPage;
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


      var src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Services/day.service */
      "./src/app/Services/day.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _add_modal_add_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../add-modal/add-modal.page */
      "./src/app/Pages/add-modal/add-modal.page.ts");

      var DayViewPage = /*#__PURE__*/function () {
        function DayViewPage(dayService, modalCtrl) {
          _classCallCheck(this, DayViewPage);

          this.dayService = dayService;
          this.modalCtrl = modalCtrl;
          this.name = '';
          this.addDisabled = true;
          this.endTimeInpDis = true;
        }

        _createClass(DayViewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            // fetches the list activities for today
            this.reloadDay(); // sets adding variable to false by default

            this.adding = false;
          }
        }, {
          key: "reloadDay",
          value: function reloadDay() {
            this.day = this.dayService.getDay();
          } // this function is used to convert to a normal data format and is used to se minimum time for endtime input

        }, {
          key: "getRegTime",
          value: function getRegTime(ionV) {
            if (ionV !== undefined) {
              return this.dayService.ionTimeConvert(ionV);
            } else {
              return '00:00';
            }
          } // this is the code for connecting to the adding modal

        }, {
          key: "showModal",
          value: function showModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _add_modal_add_modal_page__WEBPACK_IMPORTED_MODULE_4__["AddModalPage"],
                        cssClass: 'add-modal-class',
                        swipeToClose: true,
                        backdropDismiss: true
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (dataReturnded) {
                        _this.reloadDay();
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                      return _context.abrupt("return", _context.sent);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "rmItem",
          value: function rmItem(item) {
            this.dayService.removeItem(item);
            this.reloadDay();
          }
        }]);

        return DayViewPage;
      }();

      DayViewPage.ctorParameters = function () {
        return [{
          type: src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      DayViewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./day-view.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/day-view/day-view.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./day-view.page.scss */
        "./src/app/Pages/to-do/day-view/day-view.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], DayViewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=day-view-day-view-module-es5.js.map