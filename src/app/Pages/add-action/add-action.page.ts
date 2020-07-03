import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-action',
  templateUrl: './add-action.page.html',
  styleUrls: ['./add-action.page.scss'],
})
export class AddActionPage implements OnInit {

  selected = 'action';
  selecVal = 'none';

  constructor() { }

  ngOnInit() {
  }

  logEvents(inf: any) {
    console.log(inf.detail.value);
    this.selected = inf.detail.value;
  }

  run() {
    console.log(this.selecVal);
  }

}
