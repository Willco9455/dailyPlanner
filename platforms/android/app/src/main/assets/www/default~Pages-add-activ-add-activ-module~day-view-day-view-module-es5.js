(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Pages-add-activ-add-activ-module~day-view-day-view-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-activ/add-activ.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-activ/add-activ.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddActivAddActivPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>Add a New Activity</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label position=\"floating\">Activity</ion-label>\n    <ion-input [(ngModel)]=\"textInp\" (ionChange)=\"validActivInp()\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label >Competion Date</ion-label>\n    <ion-datetime [(ngModel)]=\"endDate\" (ionChange)='button1Check()' displayFormat=\"D MMM YYYY\" [min]='date' placeholder=\"None\" ></ion-datetime>\n    <div class=\"clear\">\n      <ion-button *ngIf='clearButton1 === true' (click)='clearEndDate()' fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Competion Time</ion-label>\n    <ion-datetime displayFormat=\"H:mm\" (ionChange)='button2Check()' placeholder=\"None\" [(ngModel)]=\"endTime\"></ion-datetime>\n    <div class=\"clear\">\n      <ion-button *ngIf='clearButton2 === true' (click)='clearEndTime()' fill='clear'>\n        <ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </div>\n  </ion-item>\n\n  <ion-button (click)=\"clicked()\" (onChange)='validActivInp()' [disabled]='buttonDisabled' class=\"addButton\">\n    Add\n  </ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/add-activ/add-activ-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/Pages/add-activ/add-activ-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddActivPageRoutingModule */

    /***/
    function srcAppPagesAddActivAddActivRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActivPageRoutingModule", function () {
        return AddActivPageRoutingModule;
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


      var _add_activ_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-activ.page */
      "./src/app/Pages/add-activ/add-activ.page.ts");

      var routes = [{
        path: '',
        component: _add_activ_page__WEBPACK_IMPORTED_MODULE_3__["AddActivPage"]
      }];

      var AddActivPageRoutingModule = function AddActivPageRoutingModule() {
        _classCallCheck(this, AddActivPageRoutingModule);
      };

      AddActivPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddActivPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-activ/add-activ.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/add-activ/add-activ.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddActivPageModule */

    /***/
    function srcAppPagesAddActivAddActivModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActivPageModule", function () {
        return AddActivPageModule;
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


      var _add_activ_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-activ-routing.module */
      "./src/app/Pages/add-activ/add-activ-routing.module.ts");
      /* harmony import */


      var _add_activ_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-activ.page */
      "./src/app/Pages/add-activ/add-activ.page.ts");

      var AddActivPageModule = function AddActivPageModule() {
        _classCallCheck(this, AddActivPageModule);
      };

      AddActivPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_activ_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddActivPageRoutingModule"]],
        declarations: [_add_activ_page__WEBPACK_IMPORTED_MODULE_6__["AddActivPage"]]
      })], AddActivPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-activ/add-activ.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/add-activ/add-activ.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddActivAddActivPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button.addButton {\n  margin-left: 10px;\n  margin-top: 10px;\n}\n\n.clear {\n  z-index: 2;\n  width: 30px;\n}\n\n.clear ion-button {\n  --padding-start:2px;\n  --padding-end: 2px;\n  --padding-top: 1.5px;\n}\n\n.test {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n\n.test input {\n  text-align: center;\n}\n\n.ded {\n  --inner-padding-bottom:0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYWRkLWFjdGl2L2FkZC1hY3Rpdi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUFJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBRVI7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQUk7RUFDSSxrQkFBQTtBQUVSOztBQUVBO0VBQ0ksMEJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1hY3Rpdi9hZGQtYWN0aXYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5hZGRCdXR0b257XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsZWFye1xuICAgIHotaW5kZXg6IDI7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjJweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMnB4O1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxLjVweDtcbiAgICB9XG59XG5cbi50ZXN0e1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgaW5wdXR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5kZWR7XG4gICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTowcHg7XG59ICBcblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/Pages/add-activ/add-activ.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/Pages/add-activ/add-activ.page.ts ***!
      \***************************************************/

    /*! exports provided: AddActivPage */

    /***/
    function srcAppPagesAddActivAddActivPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActivPage", function () {
        return AddActivPage;
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


      var _Services_day_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../Services/day.service */
      "./src/app/Services/day.service.ts");
      /* harmony import */


      var src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/Services/time.service */
      "./src/app/Services/time.service.ts");

      var AddActivPage = /*#__PURE__*/function () {
        function AddActivPage(dayService, timeService, router) {
          _classCallCheck(this, AddActivPage);

          this.dayService = dayService;
          this.timeService = timeService;
          this.router = router;
          this.buttonDisabled = true;
          this.clearButton1 = false;
          this.clearButton2 = false;
        } // runs of the first initialisation of the moduel;


        _createClass(AddActivPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // runs when the page is bieng trasnitioned into;

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.refresh();
            this.date = this.timeService.getDate();
          } // runs when the screen view is left;

        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            this.refresh();
          } // this is run to reset all the fields to add a new activity;

        }, {
          key: "refresh",
          value: function refresh() {
            this.textInp = undefined;
            this.endDate = undefined;
            this.endTime = undefined;
            this.buttonDisabled = true;
          } // runs when the add activity button is pressed;

        }, {
          key: "clicked",
          value: function clicked() {
            // checks for completion date;
            if (this.endDate !== undefined) {
              this.endDate = this.endDate.slice(0, this.endDate.search('T'));
              this.endDateArry = this.endDate.split('-');
            } // chescks for completion time;


            if (this.endTime !== undefined) {
              this.endTime = this.endTime.slice(this.endTime.search('T') + 1, this.endTime.indexOf(':', this.endTime.indexOf(':') + 1));
            }

            this.router.navigate(['']);
          } // checks if there is a value in the activity input field and if not the add button cannot be pressed;

        }, {
          key: "validActivInp",
          value: function validActivInp() {
            if (this.textInp === '') {
              this.buttonDisabled = true;
            } else {
              this.buttonDisabled = false;
            }
          }
        }, {
          key: "button1Check",
          value: function button1Check() {
            if (this.endDate !== undefined) {
              this.clearButton1 = true;
            } else {
              this.clearButton1 = false;
            }
          }
        }, {
          key: "button2Check",
          value: function button2Check() {
            if (this.endTime !== undefined) {
              this.clearButton2 = true;
            } else {
              this.clearButton2 = false;
            }
          }
        }, {
          key: "clearEndDate",
          value: function clearEndDate() {
            this.endDate = undefined;
          }
        }, {
          key: "clearEndTime",
          value: function clearEndTime() {
            this.endTime = undefined;
          }
        }]);

        return AddActivPage;
      }();

      AddActivPage.ctorParameters = function () {
        return [{
          type: _Services_day_service__WEBPACK_IMPORTED_MODULE_3__["DayService"]
        }, {
          type: src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AddActivPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-activ',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-activ.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-activ/add-activ.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-activ.page.scss */
        "./src/app/Pages/add-activ/add-activ.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_Services_day_service__WEBPACK_IMPORTED_MODULE_3__["DayService"], src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_4__["TimeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AddActivPage);
      /***/
    },

    /***/
    "./src/app/Services/day.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/Services/day.service.ts ***!
      \*****************************************/

    /*! exports provided: DayService */

    /***/
    function srcAppServicesDayServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DayService", function () {
        return DayService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var DayService = /*#__PURE__*/function () {
        function DayService(alertController) {
          _classCallCheck(this, DayService);

          this.alertController = alertController;
          this.dayList = [new _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__["DayItem"]('first test', '12:00', '13:00'), new _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__["DayItem"]('trollolololoolololo', '13:23', '13:26'), new _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__["DayItem"]('testing212', '15:00', '16:00')];
        }

        _createClass(DayService, [{
          key: "getDay",
          value: function getDay() {
            return _toConsumableArray(this.dayList);
          } // this converts the way ionic stores time(2020-06-02T16:00:47.314+01:00) to regular format used in findPos function

        }, {
          key: "ionTimeConvert",
          value: function ionTimeConvert(time) {
            time = time.slice(time.search('T') + 1, time.indexOf(':', time.indexOf(':') + 1));
            return time;
          } // function used to find the positon a new activity should go in based on its date, returns the position;

        }, {
          key: "findPos",
          value: function findPos(startTime, endTime) {
            // to check if the day is emty and if it is return 0 as positon
            if (this.dayList.length === 0) {
              return 0;
            }

            startTime = startTime.split(':'); // turns ionic time into array [HH,MM]

            endTime = endTime.split(':'); // turns ionic time into array [HH,MM]

            var x;

            for (x = 0; x < this.dayList.length; x++) {
              // loops through the items currently in daylist array
              var compStartTime = this.dayList[x].startTime.split(':');

              if (compStartTime[0] === startTime[0]) {
                if (compStartTime[1] === startTime[1]) {
                  // runs of the start time is the same as a activity that already exists
                  return 'error';
                } else if (startTime[1] < compStartTime[1]) {
                  // elif to check if the activity can fit in the day
                  // runs when a slot is found
                  // sets varibale for the start time of the event you want to add eady for comparison
                  var startAdd = startTime[0] + startTime[1]; // sets varibale for the end time of the event you want to add eady for comparison

                  var endAdd = endTime[0] + endTime[1]; // sets varibale for the start time of the event in front of where you want to insert the new event

                  var compStartAdd = this.dayList[x].startTime.replace(':', ''); // this if statment checks if times overlap for activities going into slot 0

                  if (x === 0) {
                    if (endAdd <= compStartAdd) {
                      return x;
                    } else {
                      return 'error';
                    }
                  } // sets varibale for the end time of the event in front of where you want to insert the new event


                  var compEndAdd = this.dayList[x - 1].endTime.replace(':', ''); // this checks if the actiity you want to add overlaps with current activities for other slots

                  if (startAdd >= compEndAdd && endAdd <= compStartAdd) {
                    return x;
                  }

                  return 'error';
                }
              } else if (startTime[0] < compStartTime[0]) {
                // runs when a slot has been found
                // this section is the exact same as the previous both of them check if the new item's times-
                // overlap with the already established activites in the list
                // sets varibale for the start time of the event you want to add eady for comparison
                var _startAdd = startTime[0] + startTime[1]; // sets varibale for the end time of the event you want to add eady for comparison


                var _endAdd = endTime[0] + endTime[1]; // sets varibale for the start time of the event in front of where you want to insert the new event


                var _compStartAdd = this.dayList[x].startTime.replace(':', ''); // this if statment checks if times overlap for activities going into slot 0


                if (x === 0) {
                  if (_endAdd <= _compStartAdd) {
                    return x;
                  } else {
                    return 'error';
                  }
                } // sets varibale for the end time of the event in front of where you want to insert the new event


                var _compEndAdd = this.dayList[x - 1].endTime.replace(':', ''); // this checks if the actiity you want to add overlaps with current activities for other slots


                if (_startAdd >= _compEndAdd && _endAdd <= _compStartAdd) {
                  return x;
                }

                return 'error';
              }
            } // runs if item needs to be inserted at the end of the day
            // sets varibale for the start time of the event you want to add ready for comparison


            var startAdd2 = startTime[0] + startTime[1]; // sets variable for the end time of the last item in the day

            var endAddExisting = this.dayList[this.dayList.length - 1].endTime.replace(':', ''); // checks if new activ starts after the old one finishes

            if (startAdd2 >= endAddExisting) {
              return this.dayList.length;
            } else {
              return 'error';
            }
          } // adds to todo list if possible takes in times in ionic format

        }, {
          key: "addToDo",
          value: function addToDo(activName, StartTime, EndTime) {
            // declarations
            var adding = new _Pages_to_do_item_model__WEBPACK_IMPORTED_MODULE_2__["DayItem"](activName, StartTime, EndTime);
            var pos = this.findPos(StartTime, EndTime); // checks if there was an error in finding a slot for the new activity

            if (pos === 'error') {
              return 'error';
            }

            this.dayList.splice(pos, 0, adding);
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Oops',
                        message: 'That is not a valid activity',
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "removeItem",
          value: function removeItem(item) {
            var index = this.dayList.findIndex(function (x) {
              return x === item;
            });
            console.log(index);
            this.dayList.splice(index, 1);
            console.log('ran');
          }
        }]);

        return DayService;
      }();

      DayService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      DayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])], DayService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~Pages-add-activ-add-activ-module~day-view-day-view-module-es5.js.map