import { Injectable } from '@angular/core';
import { DayItem } from './to-do/item.model';
import { ThrowStmt } from '@angular/compiler';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private alertController: AlertController) { }



  private items: any[] = [
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

  dayList: DayItem[] = [
    {
      name: 'first test',
      startTime: '12:00',
      endTime: '13:00'
    },
    {
      name: 'trollolololoolololo',
      startTime: '13:23',
      endTime: '13:26'
    },
    new DayItem('testing212', '15:00', '16:00')
  ];


  getDay() {// WORKS
    return [...this.dayList];
  }

  getToDo() {
    return [...this.items];
  }

  // this converts the way ionic stores time(2020-06-02T16:00:47.314+01:00) to regular format used in findPos function
  ionTimeConvert(time: string) {// WORKS
    time = time.slice(time.search('T') + 1, time.indexOf(':', time.indexOf(':') + 1));
    return time;
  }

  // function used to find the positon a new activity should go in based on its date, returns the position;
  findPos(startTime: any, endTime: any) {// WORKS!!

    startTime = this.ionTimeConvert(startTime).split(':'); // turns ionic time into array [HH,MM]
    endTime = this.ionTimeConvert(endTime).split(':'); // turns ionic time into array [HH,MM]

    let x: number;
    for (x = 0; x < this.dayList.length; x++) { // loops through the items currently in daylist array

      const compStartTime = this.dayList[x].startTime.split(':');

      if (compStartTime[0] === startTime[0]) {
        if (compStartTime[1] === startTime[1]) {
          // runs of the start time is the same as a activity that already exists
          return 'error';
        } else if (startTime[1] < compStartTime[1] ) {// elif to check if the activity can fit in the day
          // runs when a slot is found

          // sets varibale for the start time of the event you want to add eady for comparison
          const startAdd = startTime[0] + startTime[1];
          // sets varibale for the end time of the event you want to add eady for comparison
          const endAdd = endTime[0] + endTime[1];
          // sets varibale for the start time of the event in front of where you want to insert the new event
          const compStartAdd = (this.dayList[x].startTime).replace(':', '');

          // this if statment checks if times overlap for activities going into slot 0
          if (x === 0) {
            if (endAdd <= compStartAdd ) {
              return x;
            } else {
              return 'error';
            }
          }

          // sets varibale for the end time of the event in front of where you want to insert the new event
          const compEndAdd = (this.dayList[x - 1].endTime).replace(':', '');

          // this checks if the actiity you want to add overlaps with current activities for other slots
          if (startAdd >= compEndAdd && endAdd <= compStartAdd) {
            return x;
          }
          return 'error';
          }
      } else if (startTime[0] < compStartTime[0]) {
        // runs when a slot has been found

        // this section is the exact same as the previous both of them check if the new item's times-
        // overlap with the already established activites in the list

        // sets varibale for the start time of the event you want to add eady for comparison
        const startAdd = startTime[0] + startTime[1];
        // sets varibale for the end time of the event you want to add eady for comparison
        const endAdd = endTime[0] + endTime[1];
        // sets varibale for the start time of the event in front of where you want to insert the new event
        const compStartAdd = (this.dayList[x].startTime).replace(':', '');

        // this if statment checks if times overlap for activities going into slot 0
        if (x === 0) {
          if (endAdd <= compStartAdd ) {
            return x;
          } else {
            return 'error';
          }
        }

        // sets varibale for the end time of the event in front of where you want to insert the new event
        const compEndAdd = (this.dayList[x - 1].endTime).replace(':', '');

        // this checks if the actiity you want to add overlaps with current activities for other slots
        if (startAdd >= compEndAdd && endAdd <= compStartAdd) {
          return x;
        }
        return 'error';
      }
    }
    // runs if item needs to be inserted at the end of the day

    // sets varibale for the start time of the event you want to add ready for comparison
    const startAdd2 = startTime[0] + startTime[1];

    // sets variable for the end time of the last item in the day
    const endAddExisting = this.dayList[this.dayList.length - 1].endTime.replace(':', '');

    // checks if new activ starts after the old one finishes
    if (startAdd2 >= endAddExisting) {
      return this.dayList.length;
    } else {
      return 'error';
    }

  }

  addToDo(activName: string,  StartTime: string, EndTime: string) {
    const adding = new DayItem(activName, StartTime, EndTime);
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

   async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Oops',
      message: 'You cannot have two activities with the same start time',
      buttons: ['OK']
    });

    await alert.present();
  }

}


