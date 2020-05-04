import { Injectable } from '@angular/core';
import { Item } from './to-do/item.model';
import { NumericValueAccessor, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor() { }

  viewSelec = 'to-do/tabs/day-view';

  private items: Item[] = [
    // current day objects
    {
      name: 'wake up',
      completed: true,
      compDate: ['2020', '05', '04'],
      compTime: '09:15'
    },
    {
      name: 'testing testing 212',
      completed: false,
      compDate: ['2020', '05', '04'],
      compTime: '09:16'
    },
    {
      name: 'some activity',
      completed: false,
      compDate: ['2020', '05', '04'],
      compTime: '03:00'
    },
    {
      name: 'walk',
      completed: false,
      compDate: ['2020', '05', '04'],
      compTime: '03:00'
    },
    {
      name: 'homework',
      completed: true,
      compDate: ['2020', '05', '13'],
      compTime: '07:00'
    },
    {
      name: 'do nothing',
      completed: false,
      compDate: ['2022', '04', '13'],
      compTime: '24:00'
    }
  ];

  getToDo() {
    return [...this.items];
  }

  // function used to find the positon a new activity should go in based on its date, returns the position;
  findPos(activDate: string[], activTime) {
    let x: number;
    activTime = activTime.split(':');
    for (x = 0; x < this.items.length; x++) {
      const comparing = this.items[x];
      const compTime = this.items[x].compTime.split(':');
      if (activDate[0] === comparing.compDate[0]) {
        if (activDate[1] === comparing.compDate[1]) {
          if (activDate[2] === comparing.compDate[2]) {
            if (activTime[0] === compTime[0]) {
              if (activTime[1] < compTime[1]) {
                return x;
              }
            } else if (activTime[0] < compTime[0]) {
              return x;
            }
          } else if (activDate[2] < comparing.compDate[2]) {
            return x;
          }
        } else if (activDate[1] < comparing.compDate[1]) {
          return x;
        }
      } else if (activDate[0] < comparing.compDate[0]) {
        return x;
      }
    }
    return(this.items.length + 1);
  }

  addToDo(activName: string, activDate: string[], activTime: string) {
    const adding: Item = {
      name: activName,
      completed: false,
      compDate: activDate,
      compTime: activTime
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
