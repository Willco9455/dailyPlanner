import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DayService } from 'src/app/day.service';


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

  constructor(private dayService: DayService, private navController: NavController) { }

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

  // checks if the data has been entered for all the fields
  validCheck() {
    // this part checks if data has been entered for all fields
    if (this.name !== '' && this.startTime !== undefined && this.endTime !== undefined) {
      this.addDisabled = false;
    } else {
      this.addDisabled = true;
    }

    // enables the end time selector when the start time is entererd
    if (this.startTime !== undefined ) {
      this.endTimeInpDis = false;
    }

  }

  // adds a new activity to the current day list
  addActiv() {
    const posErr = this.dayService.addToDo(this.name, this.getRegTime(this.startTime), this.getRegTime(this.endTime));
    console.log('added');
    this.reloadDay();
    if (posErr === 'error') {
      this.dayService.presentAlert();
    }
  }

  arrayEqualCheck(arr1: string[], arr2: string[]) {

    // checks if arrays are the same length
    if (arr1.length !== arr2.length) {return false; }

    // checks if array contnts are the same
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) { return false; }
    }

    return true;
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
