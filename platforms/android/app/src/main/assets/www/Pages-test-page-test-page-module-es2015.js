(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-test-page-test-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/test-page/test-page.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/test-page/test-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>TEST-PAGE</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-reorder-group>\n    \n  </ion-reorder-group>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/test-page/test-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/test-page/test-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: TESTPAGEPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTPAGEPageRoutingModule", function() { return TESTPAGEPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _test_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-page.page */ "./src/app/Pages/test-page/test-page.page.ts");




const routes = [
    {
        path: '',
        component: _test_page_page__WEBPACK_IMPORTED_MODULE_3__["TESTPAGEPage"]
    }
];
let TESTPAGEPageRoutingModule = class TESTPAGEPageRoutingModule {
};
TESTPAGEPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TESTPAGEPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/test-page/test-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/test-page/test-page.module.ts ***!
  \*****************************************************/
/*! exports provided: TESTPAGEPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTPAGEPageModule", function() { return TESTPAGEPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _test_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-page-routing.module */ "./src/app/Pages/test-page/test-page-routing.module.ts");
/* harmony import */ var _test_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-page.page */ "./src/app/Pages/test-page/test-page.page.ts");







let TESTPAGEPageModule = class TESTPAGEPageModule {
};
TESTPAGEPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["TESTPAGEPageRoutingModule"]
        ],
        declarations: [_test_page_page__WEBPACK_IMPORTED_MODULE_6__["TESTPAGEPage"]]
    })
], TESTPAGEPageModule);



/***/ }),

/***/ "./src/app/Pages/test-page/test-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/Pages/test-page/test-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3Rlc3QtcGFnZS90ZXN0LXBhZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Pages/test-page/test-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/test-page/test-page.page.ts ***!
  \***************************************************/
/*! exports provided: TESTPAGEPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTPAGEPage", function() { return TESTPAGEPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TESTPAGEPage = class TESTPAGEPage {
    constructor() { }
    ngOnInit() {
    }
};
TESTPAGEPage.ctorParameters = () => [];
TESTPAGEPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./test-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/test-page/test-page.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./test-page.page.scss */ "./src/app/Pages/test-page/test-page.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TESTPAGEPage);



/***/ })

}]);
//# sourceMappingURL=Pages-test-page-test-page-module-es2015.js.map