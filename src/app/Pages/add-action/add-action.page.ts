import { Component, OnInit } from '@angular/core';
import { DayService } from 'src/app/Services/day.service';


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

  constructor(
    private dayService: DayService
  ) { }

  ngOnInit() {
    this.catagories = this.dayService.getCata();
  }

  logEvents(inf: any) {
    console.log(inf.detail.value);
    this.selected = inf.detail.value;
  }

  addAct() {
    this.deadline = this.deadConv(this.deadline);
    this.dayService.addAction(this.name, this.deadline, this.catagory, false);
  }

  deadConv(ion: string) {
    ion = ion.split('T')[0];
    console.log(ion);
    return ion;
  }
}
