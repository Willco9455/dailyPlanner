import { Component, OnInit} from '@angular/core';

import { Action } from '../item.model';
import { ModalController} from '@ionic/angular';
import { AddActionPage } from '../../add-action/add-action.page';
import { ActionsService } from 'src/app/Services/actions.service';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  actions: Action [];
  edit = false;

  constructor(
    private modalCtrl: ModalController,
    private actionsService: ActionsService
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dayRefresh();
  }

  dayRefresh() {
    this.actions = this.actionsService.getActions();

  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: AddActionPage,
      cssClass: 'add-modal-class',
      swipeToClose: true,
      backdropDismiss: true
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

    console.log(ev.detail);
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

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


}
