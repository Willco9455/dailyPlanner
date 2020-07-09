import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ActionsService } from 'src/app/Services/actions.service';
import { Action } from '../to-do/item.model';
import { TimeService } from 'src/app/Services/time.service';


@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.page.html',
  styleUrls: ['./add-action.page.scss'],
})
export class AddActionPage implements OnInit {

  name: string;
  deadline: string;
  catagory = 'none';

  catagories: string [];
  selected = 'action';
  date: string;

  constructor(
    private modal: ModalController,
    private actionsService: ActionsService,
    private timeService: TimeService
  ) { }

  ngOnInit() {
    this.catagories = this.actionsService.getCata();
    this.date = this.timeService.getDate();
  }

  logEvents(inf: any) {
    console.log(inf.detail.value);
    this.selected = inf.detail.value;
  }

  addAct() {
    if (this.deadline !== undefined) {
      this.deadline = this.deadConv(this.deadline);
    } else {
      this.deadline = 'none';
    }
    this.actionsService.addAction(this.name, this.deadline, this.catagory, false);
    this.modal.dismiss();
  }

  deadConv(ion: string) {
    ion = ion.split('T')[0];
    console.log(ion);
    return ion;
  }


}
