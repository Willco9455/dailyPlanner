import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { Router } from '@angular/router';
import { DayService } from '../../Services/day.service';

@Component({
  selector: 'app-add-activ',
  templateUrl: './add-activ.page.html',
  styleUrls: ['./add-activ.page.scss'],
})
export class AddActivPage implements OnInit {

  textInp: string;
  endDate: string;
  endDateArry: string [];
  endTime: string;
  date: string;
  buttonDisabled = true;
  clearButton1 = false;
  clearButton2 = false;

  constructor(
    private dayService: DayService,
    private router: Router
    ) { }

  // runs of the first initialisation of the moduel;
  ngOnInit() {
  }

  // runs when the page is bieng trasnitioned into;
  ionViewWillEnter() {
    this.refresh();
    this.date = this.dayService.getDate();
  }

  // runs when the screen view is left;
  ionViewDidLeave() {
    this.refresh();
  }

  // this is run to reset all the fields to add a new activity;
  refresh() {
    this.textInp = undefined;
    this.endDate = undefined;
    this.endTime = undefined;
    this.buttonDisabled = true;
  }

  // runs when the add activity button is pressed;
  clicked() {
    // checks for completion date;
    if (this.endDate !== undefined) {
      this.endDate = this.endDate.slice(0, this.endDate.search('T'));
      this.endDateArry = this.endDate.split('-');
    }
    // chescks for completion time;
    if (this.endTime !== undefined) {
      this.endTime = this.endTime.slice(this.endTime.search('T') + 1, this.endTime.indexOf(':', this.endTime.indexOf(':') + 1));
    }
    this.router.navigate(['']);
  }

  // checks if there is a value in the activity input field and if not the add button cannot be pressed;
  validActivInp() {
    if (this.textInp === '') {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  button1Check() {
    if (this.endDate !== undefined) {
      this.clearButton1 = true;
    } else {
      this.clearButton1 = false;
    }
  }

  button2Check() {
    if (this.endTime !== undefined) {
      this.clearButton2 = true;
    } else {
      this.clearButton2 = false;
    }
  }

  clearEndDate() {
    this.endDate = undefined;
  }

  clearEndTime() {
    this.endTime = undefined;
  }

}
