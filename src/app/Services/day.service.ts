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
    return [...this.dayList]
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



}


