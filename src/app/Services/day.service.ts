import { Injectable } from '@angular/core';
import { DayItem, Action } from '../Pages/to-do/item.model';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private alertController: AlertController) { }

  dayList: DayItem[] = [
    new DayItem(1, 'action1'),
    new DayItem(2, 'action2'),
    new DayItem(3, 'action2'),

  ];

  getDayList() {
    return [...this.dayList];
  }



  // this converts the way ionic stores time(2020-06-02T16:00:47.314+01:00) to regular format used in findPos function
  ionTimeConvert(time: string) {// WORKS
    time = time.slice(time.search('T') + 1, time.indexOf(':', time.indexOf(':') + 1));
    return time;
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Oops',
      message: 'That is not a valid activity',
      buttons: ['OK']
    });

    await alert.present();
  }

  removeItem(item: DayItem) {
    const index = this.dayList.findIndex(x => x === item);
    console.log(index);
    this.dayList.splice(index, 1);
    console.log('ran');
  }

  setTimings() {
    let currentTime = '00:00';
    for (const i of this.dayList) {
      currentTime = addToTime(i.aboveStyle.heightInt, currentTime);
      i.setStart(currentTime);
      currentTime = addToTime(i.activStyle.heightInt, currentTime);
      i.setEnd(currentTime);
    }

    console.log(addToTime(500, '14:20'));

    function addToTime(minuets: number, too: string) {
      let tooSplit = too.split(':');
      while (minuets !==  0) {
        if (tooSplit[1] !== '59') {
          tooSplit[1] = (parseInt(tooSplit[1], 10) + 1).toString();
        } else if (tooSplit[0] === '23') {
          tooSplit = ['00', '00'];
        } else {
          tooSplit = [(parseInt(tooSplit[0], 10) + 1).toString(), '00'];
        }
        minuets -= 1;
      }
      // adds 0 in front of any times with single digigt numbers
      for (const i of tooSplit) {
        const index = tooSplit.indexOf(i);
        if (i.length === 1) {
          tooSplit[index] = '0' + i;
        }
      }
      return(tooSplit[0] + ':' + tooSplit[1]);
    }
  }



}


