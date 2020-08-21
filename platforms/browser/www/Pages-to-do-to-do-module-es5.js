(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-to-do-to-do-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/to-do.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/to-do.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesToDoToDoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n   <ion-tabs>\n     <ion-tab-bar slot=\"bottom\">\n\n      <ion-tab-button tab=\"day-view\">\n        <ion-label>\n          Day Schedule\n        </ion-label>\n        <ion-icon name=\"today-outline\"></ion-icon>\n      </ion-tab-button>\n      \n      <ion-tab-button tab=\"actions\">\n        <ion-label>\n          Actions\n        </ion-label>\n        <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      </ion-tab-button>\n\n     </ion-tab-bar>\n   </ion-tabs>\n  \n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/to-do-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/Pages/to-do/to-do-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ToDoPageRoutingModule */

    /***/
    function srcAppPagesToDoToDoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoPageRoutingModule", function () {
        return ToDoPageRoutingModule;
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


      var _to_do_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./to-do.page */
      "./src/app/Pages/to-do/to-do.page.ts");

      var routes = [{
        path: 'tabs',
        component: _to_do_page__WEBPACK_IMPORTED_MODULE_3__["ToDoPage"],
        children: [{
          path: 'day-view',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | day-view-day-view-module */
            [__webpack_require__.e("default~Pages-add-activ-add-activ-module~day-view-day-view-module"), __webpack_require__.e("common"), __webpack_require__.e("day-view-day-view-module")]).then(__webpack_require__.bind(null,
            /*! ./day-view/day-view.module */
            "./src/app/Pages/to-do/day-view/day-view.module.ts")).then(function (m) {
              return m.DayViewPageModule;
            });
          }
        }, {
          path: 'actions',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | actions-actions-module */
            [__webpack_require__.e("common"), __webpack_require__.e("actions-actions-module")]).then(__webpack_require__.bind(null,
            /*! ./actions/actions.module */
            "./src/app/Pages/to-do/actions/actions.module.ts")).then(function (m) {
              return m.ActionsPageModule;
            });
          }
        }]
      }, {
        path: '',
        redirectTo: '/to-do/tabs/day-view',
        pathMatch: 'full'
      }, {
        path: 'add-modal',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | add-modal-add-modal-module */
          [__webpack_require__.e("common"), __webpack_require__.e("add-modal-add-modal-module")]).then(__webpack_require__.bind(null,
          /*! ../add-modal/add-modal.module */
          "./src/app/Pages/add-modal/add-modal.module.ts")).then(function (m) {
            return m.AddModalPageModule;
          });
        }
      }];

      var ToDoPageRoutingModule = function ToDoPageRoutingModule() {
        _classCallCheck(this, ToDoPageRoutingModule);
      };

      ToDoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ToDoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/to-do.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/Pages/to-do/to-do.module.ts ***!
      \*********************************************/

    /*! exports provided: ToDoPageModule */

    /***/
    function srcAppPagesToDoToDoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoPageModule", function () {
        return ToDoPageModule;
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


      var _to_do_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./to-do-routing.module */
      "./src/app/Pages/to-do/to-do-routing.module.ts");
      /* harmony import */


      var _to_do_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./to-do.page */
      "./src/app/Pages/to-do/to-do.page.ts");

      var ToDoPageModule = function ToDoPageModule() {
        _classCallCheck(this, ToDoPageModule);
      };

      ToDoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _to_do_routing_module__WEBPACK_IMPORTED_MODULE_5__["ToDoPageRoutingModule"]],
        declarations: [_to_do_page__WEBPACK_IMPORTED_MODULE_6__["ToDoPage"]]
      })], ToDoPageModule);
      /***/
    },

    /***/
    "./src/app/Pages/to-do/to-do.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/Pages/to-do/to-do.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesToDoToDoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".checkbox {\n  padding-right: 0px;\n  margin-right: 20px;\n}\n\n.checkbox-item {\n  --ripple-color: lightgreen;\n  --hover-opcity: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdG8tZG8vdG8tZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvdG8tZG8vdG8tZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94e1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHhcbn1cbi5jaGVja2JveC1pdGVte1xuICAgIC0tcmlwcGxlLWNvbG9yOiBsaWdodGdyZWVuO1xuICAgIC0taG92ZXItb3BjaXR5OiAwLjE7XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/Pages/to-do/to-do.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/Pages/to-do/to-do.page.ts ***!
      \*******************************************/

    /*! exports provided: ToDoPage */

    /***/
    function srcAppPagesToDoToDoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToDoPage", function () {
        return ToDoPage;
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


      var src_app_Services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/Services/storage.service */
      "./src/app/Services/storage.service.ts");
      /* harmony import */


      var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/Services/actions.service */
      "./src/app/Services/actions.service.ts");

      var ToDoPage = /*#__PURE__*/function () {
        function ToDoPage(storageService, actionService) {
          _classCallCheck(this, ToDoPage);

          this.storageService = storageService;
          this.actionService = actionService;
        }

        _createClass(ToDoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }]);

        return ToDoPage;
      }();

      ToDoPage.ctorParameters = function () {
        return [{
          type: src_app_Services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
        }, {
          type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"]
        }];
      };

      ToDoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-to-do',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./to-do.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/to-do.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./to-do.page.scss */
        "./src/app/Pages/to-do/to-do.page.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"], src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"]])], ToDoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=Pages-to-do-to-do-module-es5.js.map