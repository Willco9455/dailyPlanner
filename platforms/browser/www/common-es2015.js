(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-d1eb6504.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-ccbda579.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-729ec402.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-729ec402.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
    'bubbles': {
        dur: 1000,
        circles: 9,
        fn: (dur, index, total) => {
            const animationDelay = `${(dur * index / total) - dur}ms`;
            const angle = 2 * Math.PI * index / total;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circles': {
        dur: 1000,
        circles: 8,
        fn: (dur, index, total) => {
            const step = index / total;
            const animationDelay = `${(dur * step) - dur}ms`;
            const angle = 2 * Math.PI * step;
            return {
                r: 5,
                style: {
                    'top': `${9 * Math.sin(angle)}px`,
                    'left': `${9 * Math.cos(angle)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'circular': {
        dur: 1400,
        elmDuration: true,
        circles: 1,
        fn: () => {
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
        fn: () => {
            return {
                r: 26,
                style: {}
            };
        }
    },
    'dots': {
        dur: 750,
        circles: 3,
        fn: (_, index) => {
            const animationDelay = -(110 * index) + 'ms';
            return {
                r: 6,
                style: {
                    'left': `${9 - (9 * index)}px`,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 17,
                y2: 29,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    },
    'lines-small': {
        dur: 1000,
        lines: 12,
        fn: (dur, index, total) => {
            const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
            const animationDelay = `${(dur * index / total) - dur}ms`;
            return {
                y1: 12,
                y2: 20,
                style: {
                    'transform': transform,
                    'animation-delay': animationDelay,
                }
            };
        }
    }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-c2dc54d9.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<ion-header>\n  <ion-toolbar>\n  <ion-title>Add</ion-title>\n</ion-toolbar>\n</ion-header>\n-->    \n\n<ion-content mode=\"md\" *ngIf=\"edit === false; else elseBlock\">\n  <ion-toolbar>\n    <ion-segment (ionChange)='updateTool($event)' value=\"action\">\n      <ion-segment-button value=\"action\">\n        Add Action\n      </ion-segment-button>\n      <ion-segment-button value=\"catagory\">\n        Edit Catagories\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n\n  <div *ngIf=\"selected === 'action'\">\n    <ion-item>\n      <ion-label>Name:</ion-label>\n      <ion-input [(ngModel)]='name' (ionChange)='validate()' ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Deadline</ion-label>\n        <ion-datetime [(ngModel)]='deadline' (ionChange)='validate()' displayFormat=\"DDDD DD-MM-YYYY\" pickerFormat=\"DDDD DD MM YYYY\" [min]='date' max='2077' placeholder=\"None\"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catgory</ion-label>\n      <ion-select mode=\"ios\" [(ngModel)]=\"catagory\" okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\">\n        <ion-select-option *ngFor=\"let cat of catagories\" [value]=\"cat\">{{ cat }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button [disabled]='butonDis' (click)=\"addAct()\">CLICK</ion-button>\n  </div>\n  \n\n  <div *ngIf=\"selected === 'catagory'\">\n    <ion-text>you chose to add a catagory</ion-text>\n  </div>\n</ion-content>\n\n<ng-template #elseBlock>\n  <ion-header>\n    <ion-title>Edit</ion-title>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-item>\n      <ion-label>Name:</ion-label>\n      <ion-input [(ngModel)]='name' ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label >Deadline</ion-label>\n        <ion-datetime [(ngModel)]='deadline' displayFormat=\"D MMM YYYY\" [min]='date' max='2077' placeholder=\"None\" ></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Catgory</ion-label>\n      <ion-select mode=\"ios\" [(ngModel)]=\"catagory\" okText=\"Okay\" cancelText=\"Dismiss\" interface=\"popover\">\n        <ion-select-option *ngFor=\"let cat of catagories\" [value]=\"cat\">{{ cat }}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-button (click)=\"update()\">Save</ion-button>\n\n  </ion-content>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <h3>Add Activity</h3>\n\n  <ion-item>\n    <ion-label>Name:</ion-label>\n    <ion-input [(ngModel)]=\"name\" (ionChange)=\"validCheck()\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Start Time:</ion-label>\n    <ion-datetime [(ngModel)]=\"startTime\" (ionChange)=\"validCheck()\" displayFormat=\"HH:mm\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>End Time:</ion-label>\n    <ion-datetime [(ngModel)]=\"endTime\" (ionChange)=\"validCheck()\" [disabled]='endTimeInpDis' displayFormat=\"HH:mm\" [min]='getRegTime(startTime)'></ion-datetime>\n  </ion-item>\n\n  <ion-button (click)=\"addActiv()\" [disabled]=\"addDisabled\" size=\"medium\" expand='full'>\n    add\n  </ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-list>\n    <ion-radio-group (ionChange)='updateSrtBy()' [(ngModel)]='srtBy' value='catagory'>\n        <ion-item>\n          <ion-label>\n           Catagory\n          </ion-label>\n          <ion-radio\n            value='catagory'>\n          </ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Date\n          </ion-label>\n          <ion-radio\n            value='date'>\n          </ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            Custom\n          </ion-label>\n          <ion-radio\n            value='custom'>\n          </ion-radio>\n        </ion-item>\n    </ion-radio-group>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/Pages/add-action/add-action-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/add-action/add-action-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AddActionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActionPageRoutingModule", function() { return AddActionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_action_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-action.page */ "./src/app/Pages/add-action/add-action.page.ts");




const routes = [
    {
        path: '',
        component: _add_action_page__WEBPACK_IMPORTED_MODULE_3__["AddActionPage"]
    }
];
let AddActionPageRoutingModule = class AddActionPageRoutingModule {
};
AddActionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddActionPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/add-action/add-action.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/add-action/add-action.module.ts ***!
  \*******************************************************/
/*! exports provided: AddActionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActionPageModule", function() { return AddActionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_action_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-action-routing.module */ "./src/app/Pages/add-action/add-action-routing.module.ts");
/* harmony import */ var _add_action_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-action.page */ "./src/app/Pages/add-action/add-action.page.ts");







let AddActionPageModule = class AddActionPageModule {
};
AddActionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_action_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddActionPageRoutingModule"]
        ],
        declarations: [_add_action_page__WEBPACK_IMPORTED_MODULE_6__["AddActionPage"]]
    })
], AddActionPageModule);



/***/ }),

/***/ "./src/app/Pages/add-action/add-action.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/add-action/add-action.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1hY3Rpb24vYWRkLWFjdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Pages/add-action/add-action.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/add-action/add-action.page.ts ***!
  \*****************************************************/
/*! exports provided: AddActionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddActionPage", function() { return AddActionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/actions.service */ "./src/app/Services/actions.service.ts");
/* harmony import */ var _to_do_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../to-do/item.model */ "./src/app/Pages/to-do/item.model.ts");
/* harmony import */ var src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/time.service */ "./src/app/Services/time.service.ts");






let AddActionPage = class AddActionPage {
    constructor(modal, actionsService, timeService) {
        this.modal = modal;
        this.actionsService = actionsService;
        this.timeService = timeService;
        this.selected = 'action';
        this.butonDis = true;
    }
    ngOnInit() {
        this.catagories = this.actionsService.getCata();
        this.date = this.timeService.getDate();
        console.log('item edditing', this.itemEditing);
    }
    updateTool(inf) {
        this.selected = inf.detail.value;
    }
    // triggered when saving a new action
    addAct() {
        if (this.deadline !== undefined) {
            this.deadline = this.deadConv(this.deadline);
        }
        else {
            this.deadline = 'none';
        }
        this.actionsService.addAction(this.name, this.deadline, this.catagory, false);
        this.modal.dismiss();
    }
    // converts deadline
    deadConv(ion) {
        ion = ion.split('T')[0];
        console.log(ion);
        return ion;
    }
    // triggered when decided to edit the action when in edditing mode
    update() {
        this.actionsService.updateAction(this.itemEditing, new _to_do_item_model__WEBPACK_IMPORTED_MODULE_4__["Action"](this.name, this.deadConv(this.deadline), this.catagory, this.itemEditing.completed, this.itemEditing.catPos));
        this.modal.dismiss();
    }
    // triggered when adding a new action
    validate() {
        if (this.name.length !== 0 && this.deadline !== undefined) {
            this.butonDis = false;
        }
        else {
            this.butonDis = true;
        }
    }
};
AddActionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"] },
    { type: src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"] }
];
AddActionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-action',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-action.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-action/add-action.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-action.page.scss */ "./src/app/Pages/add-action/add-action.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_3__["ActionsService"],
        src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_5__["TimeService"]])
], AddActionPage);



/***/ }),

/***/ "./src/app/Pages/add-modal/add-modal-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Pages/add-modal/add-modal-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AddModalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalPageRoutingModule", function() { return AddModalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-modal.page */ "./src/app/Pages/add-modal/add-modal.page.ts");




const routes = [
    {
        path: '',
        component: _add_modal_page__WEBPACK_IMPORTED_MODULE_3__["AddModalPage"]
    }
];
let AddModalPageRoutingModule = class AddModalPageRoutingModule {
};
AddModalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddModalPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/add-modal/add-modal.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/add-modal/add-modal.module.ts ***!
  \*****************************************************/
/*! exports provided: AddModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalPageModule", function() { return AddModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-modal-routing.module */ "./src/app/Pages/add-modal/add-modal-routing.module.ts");
/* harmony import */ var _add_modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-modal.page */ "./src/app/Pages/add-modal/add-modal.page.ts");







let AddModalPageModule = class AddModalPageModule {
};
AddModalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_modal_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddModalPageRoutingModule"]
        ],
        declarations: [_add_modal_page__WEBPACK_IMPORTED_MODULE_6__["AddModalPage"]]
    })
], AddModalPageModule);



/***/ }),

/***/ "./src/app/Pages/add-modal/add-modal.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/Pages/add-modal/add-modal.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h3 {\n  text-align: center;\n}\n\nion-label {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvYWRkLW1vZGFsL2FkZC1tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FkZC1tb2RhbC9hZGQtbW9kYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Pages/add-modal/add-modal.page.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/add-modal/add-modal.page.ts ***!
  \***************************************************/
/*! exports provided: AddModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModalPage", function() { return AddModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/day.service */ "./src/app/Services/day.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let AddModalPage = class AddModalPage {
    constructor(dayService, modalCtrl) {
        this.dayService = dayService;
        this.modalCtrl = modalCtrl;
        this.addDisabled = true;
        this.endTimeInpDis = true;
    }
    ngOnInit() {
    }
    validCheck() {
        // this part checks if data has been entered for all fields
        if (this.name !== '' && this.startTime !== undefined && this.endTime !== undefined) {
            this.addDisabled = false;
        }
        else {
            this.addDisabled = true;
        }
        // enables the end time selector when the start time is entererd
        if (this.startTime !== undefined) {
            this.endTimeInpDis = false;
        }
    }
    getRegTime(ionV) {
        if (ionV !== undefined) {
            return this.dayService.ionTimeConvert(ionV);
        }
        else {
            return '00:00';
        }
    }
    addActiv() {
        const posErr = this.dayService.addToDo(this.name, this.getRegTime(this.startTime), this.getRegTime(this.endTime));
        console.log('added');
        if (posErr === 'error') {
            this.dayService.presentAlert();
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
};
AddModalPage.ctorParameters = () => [
    { type: src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
AddModalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-modal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/add-modal/add-modal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-modal.page.scss */ "./src/app/Pages/add-modal/add-modal.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_day_service__WEBPACK_IMPORTED_MODULE_2__["DayService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], AddModalPage);



/***/ }),

/***/ "./src/app/Pages/pop-over/pop-over-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Pages/pop-over/pop-over-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PopOverPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverPageRoutingModule", function() { return PopOverPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pop_over_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pop-over.page */ "./src/app/Pages/pop-over/pop-over.page.ts");




const routes = [
    {
        path: '',
        component: _pop_over_page__WEBPACK_IMPORTED_MODULE_3__["PopOverPage"]
    }
];
let PopOverPageRoutingModule = class PopOverPageRoutingModule {
};
PopOverPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PopOverPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/pop-over/pop-over.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Pages/pop-over/pop-over.module.ts ***!
  \***************************************************/
/*! exports provided: PopOverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverPageModule", function() { return PopOverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pop-over-routing.module */ "./src/app/Pages/pop-over/pop-over-routing.module.ts");
/* harmony import */ var _pop_over_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pop-over.page */ "./src/app/Pages/pop-over/pop-over.page.ts");







let PopOverPageModule = class PopOverPageModule {
};
PopOverPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pop_over_routing_module__WEBPACK_IMPORTED_MODULE_5__["PopOverPageRoutingModule"]
        ],
        declarations: [_pop_over_page__WEBPACK_IMPORTED_MODULE_6__["PopOverPage"]]
    })
], PopOverPageModule);



/***/ }),

/***/ "./src/app/Pages/pop-over/pop-over.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Pages/pop-over/pop-over.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --inner-border-width: 0px;\n}\nion-item ion-icon {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvcG9wLW92ZXIvcG9wLW92ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3BvcC1vdmVyL3BvcC1vdmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVteyBcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMHB4O1xuICAgIGlvbi1pY29uIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/Pages/pop-over/pop-over.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Pages/pop-over/pop-over.page.ts ***!
  \*************************************************/
/*! exports provided: PopOverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverPage", function() { return PopOverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Services/actions.service */ "./src/app/Services/actions.service.ts");



let PopOverPage = class PopOverPage {
    constructor(actionsService) {
        this.actionsService = actionsService;
        this.srtBy = this.actionsService.getSrt();
    }
    ngOnInit() {
    }
    updateSrtBy() {
        this.actionsService.setSrt(this.srtBy);
    }
};
PopOverPage.ctorParameters = () => [
    { type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"] }
];
PopOverPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pop-over',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pop-over.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/pop-over/pop-over.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pop-over.page.scss */ "./src/app/Pages/pop-over/pop-over.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_2__["ActionsService"]])
], PopOverPage);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map