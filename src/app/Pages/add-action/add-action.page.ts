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

  // all these variables are set when the modal is called
  name: string;
  deadline: string;
  catagory: string;
  edit: boolean;
  itemEditing: Action; // this is only relevent if you are editing a action and this variable will hold the action you are edditing

  catagories: string [];
  selected = 'action';
  date: string;

  constructor(
    private modal: ModalController,
    private actionsService: ActionsService,
    private timeService: TimeService,
  ) { }

  ngOnInit() {
    this.catagories = this.actionsService.getCata();
    this.date = this.timeService.getDate();
    console.log(this.itemEditing);
  }

  updateTool(inf: any) { // this updates which option of the toolbar is selected
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

  update() {
    this.actionsService.updateAction(
      this.itemEditing,
      new Action(
        this.name,
        this.deadConv(this.deadline),
        this.catagory,
        this.itemEditing.completed));
    this.modal.dismiss();
  }

}
