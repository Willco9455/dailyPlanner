import { Injectable, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__ } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  time: string; // variable that is constantly updated to the current time by the updateTime Function
  // used by getWeekRange to determine the current day
  week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  week2  = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


  constructor() { }

  // This is called to start the timer
  startTimer() { // COMPLETE
    const timeUpdate = window.setInterval(this.updateTime, 1000);
  }

  // This is thee function that is reacalled by the start timer function to update the time
  updateTime() { // COMPLETE
    const d = new Date();
    this.time = d.getHours().toString() + ':' + d.getMinutes().toString();
    console.log(this.time);
  }

  // returns the current date in the format 'YYYY-MM-DD'
  getDate() { // COMPLETE
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

  // returns the range of the current week as a array of days from the date of monday to the date of sunday
  getWeekRange() { // COMPLETE
    let monday: string;
    const range = [];
    const currentDate = new Date();
    const day = this.week[currentDate.getDay()];
    const pos = this.week2.indexOf(day);
    if (pos === 0) {
      monday = this.getDate();
    } else {
      monday = this.minusFromDate(this.getDate(), pos);
    }
    range[0] = monday;
    for (let i = 1; i <= 6; i++) {
      range.push(this.addToDate(monday, i));
    }
    return(range);
  }

  // enter year and it returns true for leap and false for not leap Year
  leapYear(year: number) { // COMPLETE
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }

  // this function adds however many days you input(adding) onto the date you input(date) format = string 'YYYY-MM-DD'
  addToDate(date: any, adding: number) { // COMPLETE
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
      }
    }
    return (date[0] + '-' + date[1] + '-' + date[2]);
  }

  // returns a new date after minusing days in format string 'YYYY-MM-DD'
  minusFromDate(date: any, minusing: number) { // COMPLETE
    date = date.split('-');
    date[1] = (parseInt(date[1], 10)).toString(); // this removes the 0 from the front fo the month date if there is one
    date[2] = (parseInt(date[2], 10)).toString();
    const leap = this.leapYear(parseInt((date[0]), 10));
    while (minusing !== 0) {
      if (date[2] === '1' && date[1] === '3' ) {// runs if minusing from last day in march
        date[1] = '2';
        if (leap) {
          date[2] = '29';
        } else {
          date[2] = '28';
        }
      } else if (date[2] === '1' && (date[1] === '5' || date[1] === '7' || date[1] === '10' || date[1] === '12')) {
        date[1] = (parseInt(date[1], 10) - 1).toString();
        date[2] = '30';
      } else if (date[2] === '1' && date[1] === '1' ) {
        date[0] = (parseInt(date[0], 10) - 1).toString();
        date[1] = '12';
        date[2] = '31';
      } else if (date[2] === '1' ) {
        date[1] = (parseInt(date[1], 10) - 1).toString();
        date[2] = '31';
      } else {
        date[2] = (parseInt(date[2], 10) - 1).toString();
      }
      minusing -= 1;
    }
    // puts the 0's back in front of the single digit numbers eg ['2020','7','2'] => ['2020','07','02']
    for (const i of date) {
      if (parseInt(i, 10) < 10) {
        date[date.indexOf(i)] = '0' + i;
      }
    }
    return (date[0] + '-' + date[1] + '-'  + date[2]);
  }

  dayToDate(day: string) {
    const pos = this.week2.indexOf(day);
    const date = this.getWeekRange()[pos];
    return(date);
  }

  dateToDay(date: string) {
    const weekRange = this.getWeekRange();
    const pos = weekRange.indexOf(date);
    const day = this.week2[pos];
    return(day);
  }

  // turn string date into the date that should be displayed
  dateToDisplay(date: string) {
    const today = this.getDate();
    const yesterday = this.minusFromDate(today, 1);
    const tomorow = this.addToDate(today, 1);

    const jvDate: Date = new Date(date);
    const week = this.getWeekRange();
    if (date === yesterday) {
      return 'Yesterday';
    }
    if (date === today) {
      return 'Today';
    }
    if (date === tomorow) {
      return 'Tomorow';
    }
    if (week.includes(date)) {
      return (jvDate.toLocaleDateString(undefined, { weekday: 'long' }));
    } else {
      return (jvDate.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' }));
    }
  }

}
