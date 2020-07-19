import { Component, OnInit} from '@angular/core';

import { Action } from '../item.model';
import { ModalController, PopoverController} from '@ionic/angular';
import { AddActionPage } from '../../add-action/add-action.page';
import { ActionsService } from 'src/app/Services/actions.service';
import { stringify } from 'querystring';
import { ConvertPropertyBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { ThrowStmt } from '@angular/compiler';
import { PopOverPage } from '../../pop-over/pop-over.page';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  actions: Action [];
  edit = false;
  properties: object;

  constructor(
    private modalCtrl: ModalController,
    private actionsService: ActionsService,
    private popoverController: PopoverController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dayRefresh();
  }

  dayRefresh() {
    this.actions = this.actionsService.getActions();

  }

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

  deleteAction(action: Action ) {
    console.log(this.actions);
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

  logActions() {
    this.actionsService.logAction();
  }

  async presentPopover(ev: any) {
    console.log('ran');
    const popover = await this.popoverController.create({
      component: PopOverPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }


}
