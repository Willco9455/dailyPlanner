import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/Services/day.service';
import { DayItem } from '../item.model';




@Component({
  selector: 'app-actions',
  templateUrl: './actions.page.html',
  styleUrls: ['./actions.page.scss'],
})
export class ActionsPage implements OnInit {

  dayList: DayItem [];

  constructor( private dayService: DayService) { }

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



}
