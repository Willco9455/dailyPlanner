import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { Item } from '../item.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
})
export class DayViewPage implements OnInit {

  items: Item[];
  date: any;
  constructor(private toDoService: ToDoService, private navController: NavController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.items = this.findDayArry();
    this.toDoService.viewSelec = 'to-do/tabs/day-view';
  }

  addActiv() {
    this.navController.navigateRoot(['/add-activ']);
  }

  arrayEqualCheck(arr1: string[], arr2: string[]) {

    // checks if arrays are the same length
    if (arr1.length !== arr2.length) {return false; }

    // checks if array contnts are the same
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) { return false; }
    }

    return true;
  }

  findDayArry() {
    this.items = this.toDoService.getToDo(); // fetches the todo array of objects
    this.date = this.toDoService.getDate().split('-'); // fetches the current date and turns it into an array
    const today = this.items.filter(x => this.arrayEqualCheck(x.compDate, this.date) ); // filter to find activity on current date
    return today;
  }
}
