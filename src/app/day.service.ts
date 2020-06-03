import { Injectable } from '@angular/core';
import { Item } from './to-do/item.model';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor() { }

  private items: Item[] = [
    // current day objects
    {
      name: 'wake up',
      completed: true,
      compDate: ['2020', '05', '05'],
      compTime: '09:15'
    },
    {
      name: 'testing testing 212',
      completed: false,
      compDate: ['2020', '05', '05'],
      compTime: '09:16'
    },
    {
      name: 'some activity',
      completed: false,
      compDate: ['2020', '05', '05'],
      compTime: '13:00'
    },
  ];

  private dayList = [
    {
      name: 'first test',
      startTime: '12:00',
      endTime: '1:00'
    },
    {
      name: 'trollolololoolololo',
      startTime: '1:00',
      endTime: '2:00'
    }
  ];
  getDay() {
    return [...this.dayList];
  }

  getToDo() {
    return [...this.items];
  }

  ionTimeConvert(time: string) {
    time = time.slice(time.search('T') + 1, time.indexOf(':', time.indexOf(':') + 1));
    return time;
  }

  // function used to find the positon a new activity should go in based on its date, returns the position;
  findPos(startTime: any, endTime: any) {
    startTime = this.ionTimeConvert(startTime).split(':'); // turns ionic time into array [HH,MM]
    endTime = this.ionTimeConvert(endTime).split(':'); // turns ionic time into array [HH,MM]
    console.log(startTime);
    console.log(endTime);

  }

  addToDo(activName: string,  StartTime: string, EndTime: string) {
    const adding: Item = {
      name: activName,
      startTime: StartTime,
      endTime: EndTime
    };
    const position = this.findPos(activDate, activTime);
    console.log(position);
    this.items.splice(position, 0, adding);
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
