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

  constructor(private dayService: DayService, private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log(this.dayService.findPos('2020-06-02T16:00:47.314+01:00', '2020-06-02T16:01:47.314+01:00'));
    // fetches the list activities for today
    this.day = this.dayService.getDay();


    // sets adding variable to false by default
    this.adding = false;
  }

  // checks if the data has been entered for all the fields
  validCheck() {
    console.log(this.startTime);
    if (this.name !== '' && this.startTime !== undefined && this.endTime !== undefined) {
      this.addDisabled = false;
    } else {
      this.addDisabled = true;
    }
  }

  addActiv() {

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

}
