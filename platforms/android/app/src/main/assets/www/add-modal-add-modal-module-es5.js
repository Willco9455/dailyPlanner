(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-modal-add-modal-module"], {
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
//# sourceMappingURL=add-modal-add-modal-module-es5.js.map