import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/Services/day.service';
import { Action } from '../item.model';
import { ModalController } from '@ionic/angular';
import { AddActionPage } from '../../add-action/add-action.page';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  actions: Action [];

  constructor(
    private dayService: DayService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.dayRefresh();
  }

  dayRefresh() {
    this.actions = this.dayService.getActions();

  }

  logStuff() {
    console.log(this.actions);
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




}
