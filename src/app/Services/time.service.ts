import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: string;


  constructor() { }

  startTimer() {
    const timeUpdate = window.setInterval(this.updateTime, 1000);
  }

  updateTime() {
    const d = new Date();
    this.time = d.getHours().toString() + ':' + d.getMinutes().toString();
    console.log(this.time);

  }

  getDate() {
    const currentDate = new Date();
    let date: string = currentDate.getDate().toString();
    let month: string = (currentDate.getMonth() + 1).toString();

    // checks if the month needs a 0 in and if date needs a 0 in front of it and creates the date variable ;
    if (month.length === 1) {
      month = '0' + month;
    }
    if (date.length === 1) {
      date = '0' + date;
    }
    const year = currentDate.getFullYear();
    date = year + '-' + month + '-' + date;
    return date;
  }
}
