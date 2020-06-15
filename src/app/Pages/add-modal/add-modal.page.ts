import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/Services/day.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {

  name: string;
  startTime: string;
  endTime: string;

  addDisabled = true;
  endTimeInpDis = true;


  constructor(
    private dayService: DayService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
  }

  validCheck() {
    // this part checks if data has been entered for all fields
    if (this.name !== '' && this.startTime !== undefined && this.endTime !== undefined) {
      this.addDisabled = false;
    } else {
      this.addDisabled = true;
    }

    // enables the end time selector when the start time is entererd
    if (this.startTime !== undefined ) {
      this.endTimeInpDis = false;
    }
  }

  getRegTime(ionV: any)  {
    if (ionV !== undefined) {
      return this.dayService.ionTimeConvert(ionV);
    } else {
      return '00:00';
    }
  }

  addActiv() {
    const posErr = this.dayService.addToDo(this.name, this.getRegTime(this.startTime), this.getRegTime(this.endTime));
    console.log('added');
    if (posErr === 'error') {
      this.dayService.presentAlert();
    } else {
      this.modalCtrl.dismiss();
    }
  }


}
