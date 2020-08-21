(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actions-actions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color='primary'>\n    <ion-title>Actions</ion-title>\n    <ion-buttons *ngIf=\"this.srtBy === 'custom'\" slot=\"end\">\n      <ion-button (click)='editAct()'>Move items</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-toolbar mode='ios'>\n    <ion-segment (ionChange)='dayRefresh()' style=\"width: 90%;\" [(ngModel)]='selected' value=\"day\">\n\n      <ion-segment-button value=\"day\" layout=\"icon-start\">\n        <ion-icon name=\"today-outline\"></ion-icon>\n        <ion-label>Day</ion-label> \n      </ion-segment-button>\n\n      <ion-segment-button value=\"week\" layout='icon-start'>\n        <ion-icon name=\"calendar-outline\"></ion-icon>\n        <ion-label>Week</ion-label>\n      </ion-segment-button>\n      \n      <ion-segment-button value=\"all\" layout='icon-start'>\n        <ion-icon name=\"list-outline\"></ion-icon>\n        <ion-label>All</ion-label>\n      </ion-segment-button>\n      \n    </ion-segment>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentPopover($event)\">\n        <!--<ion-label>Sort</ion-label>-->\n        <ion-icon background='primary' size='medium' name=\"swap-vertical-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n<!-- THIS PART IS SHOWN WHEN NOT SORTING BY CATAGORY -->\n  <ion-reorder-group *ngIf=\"this.srtBy !== 'catagory'; else mainElse\" (ionItemReorder)='doReorder($event)' [disabled]='!edit'>\n    <div *ngFor=\"let action of actions\">\n\n      <!--This part runs when ordering by date and it puts a header for each new date-->\n      <div class=\"dateHeader\" *ngIf=\"this.srtBy === 'date' && checkFirstDate(action)\">\n        <span>{{this.dateToDisplay(action.deadline)}}</span>\n      </div>\n\n      <!-- this section is if the the user has selected to edit the order of there actions-->\n      <ion-reorder *ngIf=\"edit === true; else elseBlock\">\n        <ion-item>\n          <ion-label>\n            <h6>{{action.name}}</h6>\n            <p>Catagory - {{action.catagory}}</p>\n            <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n          </ion-label>\n          <ion-icon name=\"reorder-three-outline\"></ion-icon>\n        </ion-item>\n      </ion-reorder>\n\n      <ng-template #elseBlock>\n        <ion-item-sliding>\n          <ion-item lines='full' class=\"action\">\n            <ion-label>\n              <h6>{{action.name}}</h6>\n              <p>Catagory - {{action.catagory}}</p>\n              <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n            </ion-label>\n  \n            <ion-checkbox slot=\"end\" [checked]='action.completed' (ionChange)='checked(action)'></ion-checkbox>\n          </ion-item>\n  \n          <ion-item-options>\n            <ion-item-option (click)='showModal(action)' color=\"secondary\">\n              <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n            </ion-item-option>\n\n            <ion-item-option (click)='deleteAction(action)' color=\"danger\">\n              <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n            </ion-item-option>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ng-template>\n\n    </div>\n  </ion-reorder-group>\n\n<!-- THIS PART IS SHOWN WHEN YOU ARE SORTING BY CATAGORY -->\n  <ng-template #mainElse>\n    <div *ngFor=\"let cat of this.catagories\">\n\n\n      <ion-list *ngIf=\"checkCatFull(cat)\">\n        \n        <ion-list-header>\n          <ion-label>{{ cat }}</ion-label>\n          <ion-button (click)=\"reorderCatFun(cat)\" >Order</ion-button>\n        </ion-list-header>\n\n          \n        <ion-reorder-group (ionItemReorder)='moveCatPos(cat, $event)' [disabled]='!checkRe(cat)'>\n          <div *ngFor=\"let action of getCatActions(cat)\">\n\n            <ion-reorder *ngIf=\"checkRe(cat); else notReorder\">\n              <ion-item >\n                <ion-label>\n                  <h6>{{action.name}}</h6>\n                  <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n                </ion-label>\n                <ion-icon name=\"reorder-three-outline\"></ion-icon>\n              </ion-item>\n            </ion-reorder>\n            \n            \n            <ng-template #notReorder>\n              <ion-item-sliding *ngIf=\"action.catagory === cat\">\n                <ion-item lines='full' class=\"action\">\n                  <ion-label>\n                    <h6>{{action.name}}</h6>\n                    <p>Deadline - {{this.dateToDisplay(action.deadline)}}</p>\n                  </ion-label>\n                  \n                  <ion-checkbox slot=\"end\" (ionChange)='checked(action)' [checked]=\"action.completed\"></ion-checkbox>\n                </ion-item>\n                \n                <ion-item-options>\n                  <ion-item-option (click)='showModal(action)' color=\"secondary\">\n                    <ion-icon slot=\"icon-only\" name=\"create-outline\"></ion-icon>\n                  </ion-item-option>\n                  \n                  <ion-item-option (click)='deleteAction(action)' color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                  </ion-item-option>\n                </ion-item-options>\n                \n              </ion-item-sliding>\n            </ng-template>\n          \n          </div>\n        </ion-reorder-group>\n      </ion-list>\n\n    </div>\n  </ng-template>\n\n    \n  <!--This creates a square so that the button does not cover important infomation-->\n  <div style=\"height: 80px\"></div>\n  <!--Button to add a new action-->\n  <ion-fab (click)='showModal(\"new\")' vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/Pages/to-do/actions/actions-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Pages/to-do/actions/actions-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ActionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsPageRoutingModule", function() { return ActionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions.page */ "./src/app/Pages/to-do/actions/actions.page.ts");




const routes = [
    {
        path: '',
        component: _actions_page__WEBPACK_IMPORTED_MODULE_3__["ActionsPage"]
    },
];
let ActionsPageRoutingModule = class ActionsPageRoutingModule {
};
ActionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActionsPageRoutingModule);



/***/ }),

/***/ "./src/app/Pages/to-do/actions/actions.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Pages/to-do/actions/actions.module.ts ***!
  \*******************************************************/
/*! exports provided: ActionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsPageModule", function() { return ActionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _actions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actions-routing.module */ "./src/app/Pages/to-do/actions/actions-routing.module.ts");
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions.page */ "./src/app/Pages/to-do/actions/actions.page.ts");
/* harmony import */ var _add_action_add_action_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../add-action/add-action.module */ "./src/app/Pages/add-action/add-action.module.ts");
/* harmony import */ var _pop_over_pop_over_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pop-over/pop-over.module */ "./src/app/Pages/pop-over/pop-over.module.ts");









let ActionsPageModule = class ActionsPageModule {
};
ActionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actions_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActionsPageRoutingModule"],
            _add_action_add_action_module__WEBPACK_IMPORTED_MODULE_7__["AddActionPageModule"],
            _pop_over_pop_over_module__WEBPACK_IMPORTED_MODULE_8__["PopOverPageModule"]
        ],
        declarations: [_actions_page__WEBPACK_IMPORTED_MODULE_6__["ActionsPage"]]
    })
], ActionsPageModule);



/***/ }),

/***/ "./src/app/Pages/to-do/actions/actions.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Pages/to-do/actions/actions.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addButton {\n  bottom: 0;\n  right: 0;\n  position: fixed;\n  z-index: 10;\n  margin: 0px 10px 10px 10px;\n  --border-radius: 500px;\n  --padding-end: 0px;\n  --padding-start: 0px;\n  height: 50px;\n  width: 60px;\n}\n.addButton ion-icon {\n  font-size: larger;\n}\nion-list-header {\n  text-transform: capitalize;\n  font-weight: bolder;\n  font-size: larger;\n}\n.dateHeader {\n  width: 110%;\n  height: auto;\n  color: black;\n  background-color: #E8E8E8;\n  padding: 6px 6px 6px 15px;\n}\n.dateHeader span {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvdG8tZG8vYWN0aW9ucy9hY3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFFSTtFQUNJLGlCQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy90by1kby9hY3Rpb25zL2FjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5hZGRCdXR0b257XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICB9IFxufVxuXG5pb24tbGlzdC1oZWFkZXJ7XG4gICAgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xufVxuXG4uZGF0ZUhlYWRlcntcbiAgICB3aWR0aDogMTEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOEU4RTg7XG4gICAgcGFkZGluZzogNnB4IDZweCA2cHggMTVweDtcbiAgICBzcGFue1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/Pages/to-do/actions/actions.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Pages/to-do/actions/actions.page.ts ***!
  \*****************************************************/
/*! exports provided: ActionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsPage", function() { return ActionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _item_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item.model */ "./src/app/Pages/to-do/item.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_action_add_action_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../add-action/add-action.page */ "./src/app/Pages/add-action/add-action.page.ts");
/* harmony import */ var src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Services/actions.service */ "./src/app/Services/actions.service.ts");
/* harmony import */ var _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pop-over/pop-over.page */ "./src/app/Pages/pop-over/pop-over.page.ts");
/* harmony import */ var src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Services/time.service */ "./src/app/Services/time.service.ts");








let ActionsPage = class ActionsPage {
    constructor(modalCtrl, actionsService, popoverController, timeService) {
        this.modalCtrl = modalCtrl;
        this.actionsService = actionsService;
        this.popoverController = popoverController;
        this.timeService = timeService;
        this.selected = this.actionsService.getSelecView();
        this.catagories = this.actionsService.catagories;
        this.edit = false;
        this.reorderCat = [];
    }
    ngOnInit() {
        this.dayRefresh();
        // creates the reorderCat array full of falses for how many catagories there are used to reorder catagories
        for (let i = 0; i < this.catagories.length; i++) {
            this.reorderCat[i] = false;
        }
    }
    ionViewWillEnter() {
        this.dayRefresh();
    }
    // essentioally resfreshes the page
    dayRefresh() {
        this.actionsService.setSelecView(this.selected);
        this.srtBy = this.actionsService.getSrt();
        this.actionsService.updateCurrent();
        this.actions = this.actionsService.getActions();
        // if viewing by catgory it feteches the array of actions split up
        if (this.srtBy === 'catagory') {
            this.catagorySplit = this.actionsService.srtByCata();
        }
        console.log('dayrefresh ran');
    }
    // the code to pop up the add modal when the add button is pressed
    showModal(passed) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this if else sets the data before going into the modal depending on if it is an edit or not
            if (passed === 'new') {
                this.properties = {
                    name: undefined,
                    deadline: undefined,
                    catagory: 'None',
                    edit: false
                };
            }
            else {
                console.log('deadline', passed.deadline);
                this.properties = {
                    name: passed.name,
                    deadline: passed.deadline,
                    catagory: passed.catagory,
                    edit: true,
                    itemEditing: passed
                };
            }
            const modal = yield this.modalCtrl.create({
                component: _add_action_add_action_page__WEBPACK_IMPORTED_MODULE_4__["AddActionPage"],
                cssClass: 'add-modal-class',
                swipeToClose: true,
                backdropDismiss: true,
                componentProps: this.properties
            });
            modal.onDidDismiss().then((dataReturnded) => {
                this.dayRefresh();
            });
            return yield modal.present();
        });
    }
    // code to show the popover to select how you want to sort the actions
    presentPopover(ev) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _pop_over_pop_over_page__WEBPACK_IMPORTED_MODULE_6__["PopOverPage"],
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true
            });
            const popOpn = window.setInterval(() => {
                this.actionsService.updateCurrent();
                this.dayRefresh();
            }, 100);
            popover.onDidDismiss().then((dataReturnded) => {
                clearInterval(popOpn);
                this.srtBy = this.actionsService.getSrt();
            });
            return yield popover.present();
        });
    }
    // function that deleltes the action you pass in from thw the actions array
    deleteAction(action) {
        this.actionsService.deleteAction(action);
        this.dayRefresh();
    }
    doReorder(ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        this.actionsService.moveAction(ev.detail.from, ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
    }
    editAct() {
        this.edit = !this.edit;
        console.log(this.edit);
    }
    //////////////// THIS STUFF IS FOR REORDING AND PRIORITSING WHEN IN THE CATAGORY VIEW ////////////////////////////
    // runs when the reorder button is pressed for a catagory
    reorderCatFun(cata) {
        const pos = this.catagories.indexOf(cata);
        this.reorderCat[pos] = !this.reorderCat[pos];
    }
    // checks wehter the catagory should be in the reorder state or not
    checkRe(cata) {
        const pos = this.catagories.indexOf(cata);
        return this.reorderCat[pos];
    }
    // triggered when a action in a catagory is moved
    moveCatPos(cata, ev) {
        // The `from` and `to` properties contain the index of the item
        // when the drag started and ended, respectively
        this.actionsService.moveCatagory(cata, ev.detail.from, ev.detail.to);
        // Finish the reorder and position the item in the DOM based on
        // where the gesture ended. This method can also be called directly
        // by the reorder group
        ev.detail.complete();
        this.dayRefresh();
    }
    // returns wether a catagory is empty
    checkCatFull(cat) {
        const filtered = this.actions.filter(x => {
            return x.catagory === cat;
        });
        return (filtered.length > 0);
    }
    // returns an array of just the actions in the one catagory
    getCatActions(cat) {
        return (this.catagorySplit[this.catagories.indexOf(cat)]);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    dateToDay(date) {
        return this.timeService.dateToDay(date);
    }
    dateToDisplay(date) {
        return (this.timeService.dateToDisplay(date));
    }
    checkFirstDate(action) {
        const pos = this.actions.findIndex(x => this.actionsService.checkActEq(x, action));
        if (pos === 0) {
            return true;
        }
        if (action.deadline === this.actions[pos - 1].deadline) {
            return false;
        }
        else {
            return true;
        }
    }
    // triggered when user checks an action off
    checked(action) {
        // updates the old action only changes the completed
        console.log('action edditing', action);
        this.actionsService.updateAction(action, new _item_model__WEBPACK_IMPORTED_MODULE_2__["Action"](action.name, action.deadline, action.catagory, !action.completed, action.catPos));
        const sleep = window.setTimeout(() => this.dayRefresh(), 500);
    }
};
ActionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_5__["ActionsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
    { type: src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_7__["TimeService"] }
];
ActionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./actions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Pages/to-do/actions/actions.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./actions.page.scss */ "./src/app/Pages/to-do/actions/actions.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        src_app_Services_actions_service__WEBPACK_IMPORTED_MODULE_5__["ActionsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
        src_app_Services_time_service__WEBPACK_IMPORTED_MODULE_7__["TimeService"]])
], ActionsPage);



/***/ })

}]);
//# sourceMappingURL=actions-actions-module-es2015.js.map