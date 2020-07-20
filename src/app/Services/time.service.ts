import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: string;
  week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

  getWeekRange() {
    const currentDate = new Date();
    const day = this.week[currentDate.getDay()];
    console.log(this.getDate());
    return('nothing');
  }

  leapYear(year: number) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  // this function adds however many days you input(adding) onto the date you input(date)
  addToDate(date: any, adding: number) {
    date = date.split('-');
    date[1] = (parseInt(date[1], 10)).toString(); // this removes the 0 from the front fo the month date if there is one
    const leap = this.leapYear(parseInt((date[0]), 10));

    // this while loop adds the a day to the date every time it runs taking into acount end of months, years and leap years
    while (adding !== 0) {
      if (
          (date[2] === '28' && date[1] === '2' && !leap) ||
          (date[2] === '29' && date[1] === '2' && leap) ||
          (date[2] === '30' && (date[1] === '4' || date[1] === '6' || date[1] === '9' || date[1] === '11')) ||
          (date[2] === '31' && !(date[1] === '12'))
        ) {
        // runs at the end of months
        date[1] = (parseInt(date[1], 10) + 1).toString();
        date[2] = '1';
      } else if (date[2] === '31' && date[1] === '12') {
        // runs when adding day to the last day of the year
        date[0] = (parseInt(date[0], 10) + 1).toString();
        date[1] = '1';
        date[2] = '1';
      } else { // runs for any other date
        date[2] = (parseInt(date[2], 10) + 1).toString();
      }
      adding -= 1;
    }
    // puts the 0's back in front of the single digit numbers eg ['2020','7','2'] => ['2020','07','02']
    for (const i of date) {
      if (parseInt(i, 10) < 10) {
        date[date.indexOf(i)] = '0' + i;
        console.log('does');
      }
    }
    return(date);
  }

}
