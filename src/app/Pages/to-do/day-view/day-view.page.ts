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

  dayList: DayItem [];

  constructor(
    private dayService: DayService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.dayList = this.dayService.getDayList();
  }

  ionViewWillEnter() {

  }


  // this function is used to convert to a normal data format and is used to se minimum time for endtime input
  getRegTime(ionV: any)  {
    if (ionV !== undefined) {
      return this.dayService.ionTimeConvert(ionV);
    } else {
      return '00:00';
    }
  }


}
