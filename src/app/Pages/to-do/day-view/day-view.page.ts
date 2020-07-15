import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DayService } from 'src/app/Services/day.service';

import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../../add-modal/add-modal.page';
import { DayItem } from '../item.model';


@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
})
export class DayViewPage implements OnInit {

  day: any;
  adding: boolean;
  name = '';
  startTime: string;
  endTime: string;
  addDisabled = true;
  endTimeInpDis = true;

  constructor(
    private dayService: DayService,
    private navController: NavController,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    // fetches the list activities for today
    this.reloadDay();

    // sets adding variable to false by default
    this.adding = false;
  }

  reloadDay() {
    this.day = this.dayService.getDay();
  }


  // this function is used to convert to a normal data format and is used to se minimum time for endtime input
  getRegTime(ionV: any)  {
    if (ionV !== undefined) {
      return this.dayService.ionTimeConvert(ionV);
    } else {
      return '00:00';
    }
  }

  // this is the code for connecting to the adding modal
  async showModal() {
    const modal = await this.modalCtrl.create({
      component: AddModalPage,
      cssClass: 'add-modal-class',
      swipeToClose: true,
      backdropDismiss: true
    });

    modal.onDidDismiss().then((dataReturnded) => {
      this.reloadDay();
    });

    return await modal.present();
  }

  rmItem(item: DayItem) {
    this.dayService.removeItem(item);
    this.reloadDay();
  }

}
