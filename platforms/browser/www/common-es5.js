(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
      \**************************************************************************/

    /*! exports provided: a, d */

    /***/
    function node_modulesIonicCoreDistEsmFrameworkDelegateD1eb6504Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return attachComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return detachComponent;
      });

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);

                  if (!el.componentOnReady) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 11;
                  return el.componentOnReady();

                case 11:
                  return _context.abrupt("return", el);

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
      \**************************************************************/

    /*! exports provided: a, b, c, h */

    /***/
    function node_modulesIonicCoreDistEsmHapticCcbda579Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return hapticSelectionStart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hapticSelectionChanged;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return hapticSelectionEnd;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hapticSelection;
      });
      /**
       * Check to see if the Haptic Plugin is available
       * @return Returns `true` or false if the plugin is available
       */

      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */


      var hapticSelection = function hapticSelection() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.selection();
        }
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionStart();
        }
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionChanged();
        }
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        var engine = window.TapticEngine;

        if (engine) {
          engine.gestureSelectionEnd();
        }
      };
      /***/

    },

    /***/
    "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
      \*************************************************************/

    /*! exports provided: s */

    /***/
    function node_modulesIonicCoreDistEsmIndex729ec402Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "s", function () {
        return sanitizeDOMString;
      });
      /**
       * Does a simple sanitization of all elements
       * in an untrusted string
       */


      var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
        try {
          if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
          }
          /**
           * Create a document fragment
           * separate from the main DOM,
           * create a div to do our work in
           */


          var documentFragment = document.createDocumentFragment();
          var workingDiv = document.createElement('div');
          documentFragment.appendChild(workingDiv);
          workingDiv.innerHTML = untrustedString;
          /**
           * Remove any elements
           * that are blocked
           */

          blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
              var element = getElementsToRemove[elementIndex];

              if (element.parentNode) {
                element.parentNode.removeChild(element);
              } else {
                documentFragment.removeChild(element);
              }
              /**
               * We still need to sanitize
               * the children of this element
               * as they are left behind
               */


              var childElements = getElementChildren(element);
              /* tslint:disable-next-line */

              for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                sanitizeElement(childElements[childIndex]);
              }
            }
          });
          /**
           * Go through remaining elements and remove
           * non-allowed attribs
           */
          // IE does not support .children on document fragments, only .childNodes

          var dfChildren = getElementChildren(documentFragment);
          /* tslint:disable-next-line */

          for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
          } // Append document fragment to div


          var fragmentDiv = document.createElement('div');
          fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

          var getInnerDiv = fragmentDiv.querySelector('div');
          return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
        } catch (err) {
          console.error(err);
          return '';
        }
      };
      /**
       * Clean up current element based on allowed attributes
       * and then recursively dig down into any child elements to
       * clean those up as well
       */


      var sanitizeElement = function sanitizeElement(element) {
        // IE uses childNodes, so ignore nodes that are not elements
        if (element.nodeType && element.nodeType !== 1) {
          return;
        }

        for (var i = element.attributes.length - 1; i >= 0; i--) {
          var attribute = element.attributes.item(i);
          var attributeName = attribute.name; // remove non-allowed attribs

          if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
          } // clean up any allowed attribs
          // that attempt to do any JS funny-business


          var attributeValue = attribute.value;
          /* tslint:disable-next-line */

          if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
          }
        }
        /**
         * Sanitize any nested children
         */


        var childElements = getElementChildren(element);
        /* tslint:disable-next-line */

        for (var _i = 0; _i < childElements.length; _i++) {
          sanitizeElement(childElements[_i]);
        }
      };
      /**
       * IE doesn't always support .children
       * so we revert to .childNodes instead
       */


      var getElementChildren = function getElementChildren(el) {
        return el.children != null ? el.children : el.childNodes;
      };

      var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
      var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
      \***********************************************************************/

    /*! exports provided: S */

    /***/
    function node_modulesIonicCoreDistEsmSpinnerConfigsC78e170eJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "S", function () {
        return SPINNERS;
      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
      \*************************************************************/

    /*! exports provided: c, g, h, o */

    /***/
    function node_modulesIonicCoreDistEsmThemeC2dc54d9Js(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return createColorClasses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "g", function () {
        return getClassMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "h", function () {
        return hostContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "o", function () {
        return openURL;
      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color) {
        return typeof color === 'string' && color.length > 0 ? _defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true) : undefined;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8) {
          return _ref3.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddActionAddActionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n<ion-header>\n  <ion-toolbar>\n  <ion-title>Add</ion-title>\n</ion-toolbar>\n</ion-header>\n-->    \n\n<ion-content mode=\"md\" *ngIf=\"edit === false; else elseBlock\">\n  <ion-toolbar>\n    <ion-segment (ionChange)='updateTool($event)' value=\"action\">\n      <ion-segment-button value=\"action\">\n        Add Action\n      </ion-segment-button>\n      <ion-segment-button value=\"catagory\">\n        Edit Catagories\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div *ngIf=\"selected === 'action'\">\n    <ion-item>\n      <ion-label>Name:</ion-label>\n      <ion-input [(ngModel)]='name' (ionChange)='validate()' ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Deadline</ion-label>\n        <ion-datetime [(ngModel)]='deadline' (ionChange)='validate()' displayFormat=\"DDDD DD-MM-YYYY\" pickerFormat=\"DDDD DD MM YYYY\" [min]='date' max='2077' placeholder=\"None\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catgory</ion-label>\n      <ion-select mode=\"ios\" [(ngModel)]=\"catagory\" okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\">\n        <ion-select-option *ngFor=\"let cat of catagories\" [value]=\"cat\">{{ cat }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button [disabled]='butonDis' (click)=\"addAct()\">CLICK</ion-button>\n  </div>\n  \n\n  <div *ngIf=\"selected === 'catagory'\">\n    <ion-text>you chose to add a catagory</ion-text>\n  </div>\n</ion-content>\n\n<ng-template #elseBlock>\n  <ion-header>\n    <ion-title>Edit</ion-title>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-item>\n      <ion-label>Name:</ion-label>\n      <ion-input [(ngModel)]='name' ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Deadline</ion-label>\n        <ion-datetime [(ngModel)]='deadline' displayFormat=\"D MMM YYYY\" [min]='date' max='2077' placeholder=\"None\" ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catgory</ion-label>\n      <ion-select mode=\"ios\" [(ngModel)]=\"catagory\" okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\">\n        <ion-select-option *ngFor=\"let cat of catagories\" [value]=\"cat\">{{ cat }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button (click)=\"update()\">Save</ion-button>\n\n  </ion-content>\n</ng-template>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddModalAddModalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <h3>Add Activity</h3>\n\n  <ion-item>\n    <ion-label>Name:</ion-label>\n    <ion-input [(ngModel)]=\"name\" (ionChange)=\"validCheck()\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Start Time:</ion-label>\n    <ion-datetime [(ngModel)]=\"startTime\" (ionChange)=\"validCheck()\" displayFormat=\"HH:mm\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>End Time:</ion-label>\n    <ion-datetime [(ngModel)]=\"endTime\" (ionChange)=\"validCheck()\" [disabled]='endTimeInpDis' displayFormat=\"HH:mm\" [min]='getRegTime(startTime)'></ion-datetime>\n  </ion-item>\n\n  <ion-button (click)=\"addActiv()\" [disabled]=\"addDisabled\" size=\"medium\" expand='full'>\n    add\n  </ion-button>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPopOverPopOverPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)='updateSrtBy()' [(ngModel)]='srtBy' value='catagory'>\n        <ion-item>\n          <ion-label>\n           Catagory\n          </ion-label>\n          <ion-radio\n            value='catagory'>\n          </ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Date\n          </ion-label>\n          <ion-radio\n            value='date'>\n          </ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Custom\n          </ion-label>\n          <ion-radio\n            value='custom'>\n          </ion-radio>\n        </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/Pages/add-action/add-action-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/Pages/add-action/add-action-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: AddActionPageRoutingModule */

    /***/
    function srcAppPagesAddActionAddActionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActionPageRoutingModule", function () {
        return AddActionPageRoutingModule;
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


      var _add_action_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-action.page */
      "./src/app/Pages/add-action/add-action.page.ts");

      var routes = [{
        path: '',
        component: _add_action_page__WEBPACK_IMPORTED_MODULE_3__["AddActionPage"]
      }];

      var AddActionPageRoutingModule = function AddActionPageRoutingModule() {
        _classCallCheck(this, AddActionPageRoutingModule);
      };

      AddActionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddActionPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-action/add-action.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/add-action/add-action.module.ts ***!
      \*******************************************************/

    /*! exports provided: AddActionPageModule */

    /***/
    function srcAppPagesAddActionAddActionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActionPageModule", function () {
        return AddActionPageModule;
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


      var _add_action_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-action-routing.module */
      "./src/app/Pages/add-action/add-action-routing.module.ts");
      /* harmony import */


      var _add_action_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-action.page */
      "./src/app/Pages/add-action/add-action.page.ts");

      var AddActionPageModule = function AddActionPageModule() {
        _classCallCheck(this, AddActionPageModule);
      };

      AddActionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_action_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddActionPageRoutingModule"]],
        declarations: [_add_action_page__WEBPACK_IMPORTED_MODULE_6__["AddActionPage"]]
      })], AddActionPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-action/add-action.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/Pages/add-action/add-action.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddActionAddActionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1hY3Rpb24vYWRkLWFjdGlvbi5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/add-action/add-action.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/add-action/add-action.page.ts ***!
      \*****************************************************/

    /*! exports provided: AddActionPage */

    /***/
    function srcAppPagesAddActionAddActionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddActionPage", function () {
        return AddActionPage;
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


      var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Services/actions.service */
      "./src/app/Services/actions.service.ts");
      /* harmony import */


      var _to_do_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../to-do/item.model */
      "./src/app/Pages/to-do/item.model.ts");
      /* harmony import */


      var src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/Services/time.service */
      "./src/app/Services/time.service.ts");

      var AddActionPage = /*#__PURE__*/function () {
        function AddActionPage(modal, actionsService, timeService) {
          _classCallCheck(this, AddActionPage);

          this.modal = modal;
          this.actionsService = actionsService;
          this.timeService = timeService;
          this.selected = 'action';
          this.butonDis = true;
        }

        _createClass(AddActionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.catagories = this.actionsService.getCata();
            this.date = this.timeService.getDate();
            console.log('item edditing', this.itemEditing);
          }
        }, {
          key: "updateTool",
          value: function updateTool(inf) {
            this.selected = inf.detail.value;
          } // triggered when saving a new action

        }, {
          key: "addAct",
          value: function addAct() {
            if (this.deadline !== undefined) {
              this.deadline = this.deadConv(this.deadline);
            } else {
              this.deadline = 'none';
            }

            this.actionsService.addAction(this.name, this.deadline, this.catagory, false);
            this.modal.dismiss();
          } // converts deadline

        }, {
          key: "deadConv",
          value: function deadConv(ion) {
            ion = ion.split('T')[0];
            console.log(ion);
            return ion;
          } // triggered when decided to edit the action when in edditing mode

        }, {
          key: "update",
          value: function update() {
            this.actionsService.updateAction(this.itemEditing, new _to_do_item_model__WEBPACK_IMPORTED_MODULE_4__["Action"](this.name, this.deadConv(this.deadline), this.catagory, this.itemEditing.completed, this.itemEditing.catPos));
            this.modal.dismiss();
          } // triggered when adding a new action

        }, {
          key: "validate",
          value: function validate() {
            if (this.name.length !== 0 && this.deadline !== undefined) {
              this.butonDis = false;
            } else {
              this.butonDis = true;
            }
          }
        }]);

        return AddActionPage;
      }();

      AddActionPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"]
        }, {
          type: src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]
        }];
      };

      AddActionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-action',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-action.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-action.page.scss */
        "./src/app/Pages/add-action/add-action.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"], src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]])], AddActionPage);
      /***/
    },

    /***/
    "./src/app/Pages/add-modal/add-modal-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/Pages/add-modal/add-modal-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddModalPageRoutingModule */

    /***/
    function srcAppPagesAddModalAddModalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddModalPageRoutingModule", function () {
        return AddModalPageRoutingModule;
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


      var _add_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-modal.page */
      "./src/app/Pages/add-modal/add-modal.page.ts");

      var routes = [{
        path: '',
        component: _add_modal_page__WEBPACK_IMPORTED_MODULE_3__["AddModalPage"]
      }];

      var AddModalPageRoutingModule = function AddModalPageRoutingModule() {
        _classCallCheck(this, AddModalPageRoutingModule);
      };

      AddModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddModalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-modal/add-modal.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/add-modal/add-modal.module.ts ***!
      \*****************************************************/

    /*! exports provided: AddModalPageModule */

    /***/
    function srcAppPagesAddModalAddModalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddModalPageModule", function () {
        return AddModalPageModule;
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


      var _add_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-modal-routing.module */
      "./src/app/Pages/add-modal/add-modal-routing.module.ts");
      /* harmony import */


      var _add_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-modal.page */
      "./src/app/Pages/add-modal/add-modal.page.ts");

      var AddModalPageModule = function AddModalPageModule() {
        _classCallCheck(this, AddModalPageModule);
      };

      AddModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddModalPageRoutingModule"]],
        declarations: [_add_modal_page__WEBPACK_IMPORTED_MODULE_6__["AddModalPage"]]
      })], AddModalPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/add-modal/add-modal.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/add-modal/add-modal.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddModalAddModalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "h3 {\n  text-align: center;\n}\n\nion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYWRkLW1vZGFsL2FkZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1tb2RhbC9hZGQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/Pages/add-modal/add-modal.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/Pages/add-modal/add-modal.page.ts ***!
      \***************************************************/

    /*! exports provided: AddModalPage */

    /***/
    function srcAppPagesAddModalAddModalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddModalPage", function () {
        return AddModalPage;
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

      var AddModalPage = /*#__PURE__*/function () {
        function AddModalPage(dayService, modalCtrl) {
          _classCallCheck(this, AddModalPage);

          this.dayService = dayService;
          this.modalCtrl = modalCtrl;
          this.addDisabled = true;
          this.endTimeInpDis = true;
        }

        _createClass(AddModalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "validCheck",
          value: function validCheck() {
            // this part checks if data has been entered for all fields
            if (this.name !== '' && this.startTime !== undefined && this.endTime !== undefined) {
              this.addDisabled = false;
            } else {
              this.addDisabled = true;
            } // enables the end time selector when the start time is entererd


            if (this.startTime !== undefined) {
              this.endTimeInpDis = false;
            }
          }
        }, {
          key: "getRegTime",
          value: function getRegTime(ionV) {
            if (ionV !== undefined) {
              return this.dayService.ionTimeConvert(ionV);
            } else {
              return '00:00';
            }
          }
        }, {
          key: "addActiv",
          value: function addActiv() {
            var posErr = this.dayService.addToDo(this.name, this.getRegTime(this.startTime), this.getRegTime(this.endTime));
            console.log('added');

            if (posErr === 'error') {
              this.dayService.presentAlert();
            } else {
              this.modalCtrl.dismiss();
            }
          }
        }]);

        return AddModalPage;
      }();

      AddModalPage.ctorParameters = function () {
        return [{
          type: src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      AddModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-modal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-modal.page.scss */
        "./src/app/Pages/add-modal/add-modal.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])], AddModalPage);
      /***/
    },

    /***/
    "./src/app/Pages/pop-over/pop-over-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/Pages/pop-over/pop-over-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PopOverPageRoutingModule */

    /***/
    function srcAppPagesPopOverPopOverRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopOverPageRoutingModule", function () {
        return PopOverPageRoutingModule;
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


      var _pop_over_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pop-over.page */
      "./src/app/Pages/pop-over/pop-over.page.ts");

      var routes = [{
        path: '',
        component: _pop_over_page__WEBPACK_IMPORTED_MODULE_3__["PopOverPage"]
      }];

      var PopOverPageRoutingModule = function PopOverPageRoutingModule() {
        _classCallCheck(this, PopOverPageRoutingModule);
      };

      PopOverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PopOverPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/pop-over/pop-over.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/Pages/pop-over/pop-over.module.ts ***!
      \***************************************************/

    /*! exports provided: PopOverPageModule */

    /***/
    function srcAppPagesPopOverPopOverModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopOverPageModule", function () {
        return PopOverPageModule;
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


      var _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pop-over-routing.module */
      "./src/app/Pages/pop-over/pop-over-routing.module.ts");
      /* harmony import */


      var _pop_over_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pop-over.page */
      "./src/app/Pages/pop-over/pop-over.page.ts");

      var PopOverPageModule = function PopOverPageModule() {
        _classCallCheck(this, PopOverPageModule);
      };

      PopOverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopOverPageRoutingModule"]],
        declarations: [_pop_over_page__WEBPACK_IMPORTED_MODULE_6__["PopOverPage"]]
      })], PopOverPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/pop-over/pop-over.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/Pages/pop-over/pop-over.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPopOverPopOverPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --inner-border-width: 0px;\n}\nion-item ion-icon {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcG9wLW92ZXIvcG9wLW92ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3BvcC1vdmVyL3BvcC1vdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVteyBcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/Pages/pop-over/pop-over.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/Pages/pop-over/pop-over.page.ts ***!
      \*************************************************/

    /*! exports provided: PopOverPage */

    /***/
    function srcAppPagesPopOverPopOverPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PopOverPage", function () {
        return PopOverPage;
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


      var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Services/actions.service */
      "./src/app/Services/actions.service.ts");

      var PopOverPage = /*#__PURE__*/function () {
        function PopOverPage(actionsService) {
          _classCallCheck(this, PopOverPage);

          this.actionsService = actionsService;
          this.srtBy = this.actionsService.getSrt();
        }

        _createClass(PopOverPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateSrtBy",
          value: function updateSrtBy() {
            this.actionsService.setSrt(this.srtBy);
          }
        }]);

        return PopOverPage;
      }();

      PopOverPage.ctorParameters = function () {
        return [{
          type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"]
        }];
      };

      PopOverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-over',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pop-over.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pop-over.page.scss */
        "./src/app/Pages/pop-over/pop-over.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"]])], PopOverPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map