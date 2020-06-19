import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/Services/day.service';
import { DayItem } from '../item.model';
import { ModalController } from '@ionic/angular';
import { AddActionPage } from '../../add-action/add-action.page';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  dayList: DayItem [];

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
    this.dayList = this.dayService.getDay();

  }

  logStuff() {
    console.log(this.dayList);
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
