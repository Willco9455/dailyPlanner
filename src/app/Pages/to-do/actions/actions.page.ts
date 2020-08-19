import { Component, OnInit} from '@angular/core';

import { Action } from '../item.model';
import { ModalController, PopoverController} from '@ionic/angular';
import { AddActionPage } from '../../add-action/add-action.page';
import { ActionsService } from 'src/app/Services/actions.service';
import { PopOverPage } from '../../pop-over/pop-over.page';
import { TimeService } from 'src/app/Services/time.service';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  actions: Action [];
  properties: object;
  selected = this.actionsService.getSelecView();
  srtBy: string;
  catagories = this.actionsService.catagories;

  edit = false;
  reorderCat: boolean[] = [];

  constructor(
    private modalCtrl: ModalController,
    private actionsService: ActionsService,
    private popoverController: PopoverController,
    private timeService: TimeService,
    ) { }

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
  }


  // the code to pop up the add modal when the add button is pressed
  async showModal(passed: any) {
    // this if else sets the data before going into the modal depending on if it is an edit or not
    if (passed === 'new') {
      this.properties = {
        name: undefined,
        deadline: undefined,
        catagory: 'None',
        edit: false
      };
    } else {
      console.log('deadline', passed.deadline);
      this.properties = {
        name: passed.name,
        deadline: passed.deadline,
        catagory: passed.catagory,
        edit: true,
        itemEditing: passed
      };
    }
    const modal = await this.modalCtrl.create({
      component: AddActionPage,
      cssClass: 'add-modal-class',
      swipeToClose: true,
      backdropDismiss: true,
      componentProps: this.properties
    });

    modal.onDidDismiss().then((dataReturnded) => {
      this.dayRefresh();
    });

    return await modal.present();
  }

  // code to show the popover to select how you want to sort the actions
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopOverPage,
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

    return await popover.present();
  }

  // function that deleltes the action you pass in from thw the actions array
  deleteAction(action: Action ) {
    this.actionsService.deleteAction(action);
    this.dayRefresh();
  }

  doReorder(ev: any) {
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
  reorderCatFun(cata: string) {
    const pos = this.catagories.indexOf(cata);
    this.reorderCat[pos] = !this.reorderCat[pos];
  }

  // checks wehter the catagory should be in the reorder state or not
  checkRe(cata: string) {
    const pos = this.catagories.indexOf(cata);
    return this.reorderCat[pos];
  }


  moveCatPos(cata: string, ev: any) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively

    this.actionsService.moveCatagory(cata, ev.detail.from, ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
    this.dayRefresh();
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  dateToDay(date: string) {
    return this.timeService.dateToDay(date);
  }

  checkCatFull(cat: string) {
    const filtered = this.actions.filter(x => {
      return x.catagory === cat;
    });
    return (filtered.length > 0);
  }

  dateToDisplay(date: string) {
    return (this.timeService.dateToDisplay(date));
  }

}
