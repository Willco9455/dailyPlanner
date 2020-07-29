import { Injectable } from '@angular/core';
import { Action } from '../Pages/to-do/item.model';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private timeService: TimeService) { }

  actions: Action [] = [
    new Action('today2', '2020-07-29', 'Free', false),
    new Action('today1', '2020-07-29', 'Free', true),
    new Action('another year', '2021-07-20', 'Work', false),
    new Action('week2', '2020-08-02', 'Family', true),
    new Action('week1', '2020-07-31', 'Family', false),
    new Action('another year', '2021-07-20', 'Work', false),
    new Action('today3', '2020-07-29', 'Free', false),
    new Action('week3', '2020-08-03', 'Family', true),
    new Action('another year', '2021-07-20', 'Work', false),
  ];

  currentActions = this.copyActions();

  catagories = ['None', 'Work', 'Free', 'Family'];

  selectedView = 'all';
  srtBy = 'date';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // general helpful functions

   // returns a deep copy of the actions array
  copyActions() { // COMPLETE
  const newy: Action [] = [];
  for (const i of this.actions) {
    const adding: Action = {
      name: i.name.slice(),
      deadline: i.deadline.slice(),
      catagory: i.catagory.slice(),
      completed: i.completed
    };
    newy.push(adding);
  }
  return (newy);
  }

  // returns the current catagories
  getCata() { // COMPLETE
    return [...this.catagories];
  }

//////////////////////////////////////// ** STUFF TO DO WITH THE ACTIONS ARRAY ** /////////////////////////////////////////////////

  // returns the master Actions Variable
  getActions() { // COMPLETE
    return [...this.currentActions];
  }

  // Adds a new actions to possiton 0 in the Array
  addAction(name: string, deadline: string, catagory: string, completed: boolean) {
    const adding = new Action(name, deadline, catagory, completed);
    this.actions.splice(0, 0, adding);
    this.updateCurrent();
  }

  // Removes the action that is passed into the array
  deleteAction(action: Action) {
    const index = this.actions.findIndex(x => x === action);
    this.actions.splice(index, 1);
  }

  // moves an actions from a posstion to another possiton
  moveAction(from: number, to: number) {
    const action = this.actions[from];
    this.actions.splice(from, 1);
    this.actions.splice(to, 0, action);
    console.log(this.actions);
  }

  // checks if two arrays are equal in values
  checkActEq(a: Action, b: Action) {
    if (
      a.name === b.name &&
      a.deadline === b.deadline &&
      a.catagory === b.catagory &&
      a.completed === b.completed
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Updates an action
  updateAction(old: Action, neww: Action) {
    const index = this.actions.findIndex(x => this.checkActEq(x, old));
    this.actions.splice(index, 1, neww);
    this.updateCurrent();
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // functions to do with the current selected view

  // these are the getters and setters for the selected view variable used by the popover
  // this returns the view(week, day, all) currently selected by the user
  getSelecView() {
    return this.selectedView;
  }

  // this sets the selected view to a new value inputed into the function
  setSelecView(newVal: string) {
    this.selectedView = newVal;
  }

  // function that updates the current actions in view when the main actions array is changed
  updateCurrent() {
    if (this.selectedView === 'all') {
      this.currentActions = this.copyActions();
    } else if (this.selectedView === 'day') {
      this.setDayView();
    } else {
      this.setWeekView();
    }

    if (this.srtBy === 'date') {
      this.srtByDate();
    }
  }

  // sets the curent actions varaible to the actions just for the current day, runs when day view is selected
  setDayView() {
    const results = this.actions.filter( x => x.deadline === this.timeService.getDate());
    this.currentActions = results;
  }

  // this function sets the currentActions array to the just the days of the current week
  setWeekView() {
    const weekAry = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const week = this.timeService.getWeekRange();
    const results = this.copyActions().filter( x =>
      week.includes(x.deadline)
    );
    this.currentActions = results;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // sorting functions
  // getter for the srtBy variable
  getSrt() {
    return this.srtBy;
  }
  // setter for the srtBy variable
  setSrt(newSrt: string) {
    this.srtBy = newSrt;
  }

  // 1 - sorts the currentActions array by date low to high;
  srtByDate() {

    // Declarations
    const dateVal: number [] = []; // array filled with the values for the dates
    const newCurentActions: Action [] = []; // aray filled with the current actions in the new order

    // this for loop creates a array of the values of the dates by adding the year, month and day together
    for (const i of this.currentActions) {
      const deadline = i.deadline.split('-');
      const deadNum = parseInt(deadline[0] + deadline[1] + deadline[2], 10);
      dateVal.splice(dateVal.length, 0, deadNum);
    }

    // this section sorts the date into low to high date
    const dateValCop = dateVal.slice();
    dateValCop.sort((a, b) => { // sorts the array fro low to high
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });

    // this section creates a new array of actions in the correct order and assigns it to the currentActions array
    for (const i of dateValCop) {
      const oldIndex = dateVal.indexOf(i);
      const newIndex = dateValCop.indexOf(i);
      dateVal[oldIndex] = null;
      dateValCop[newIndex] = null;
      const adding: Action = {
        name: this.currentActions[oldIndex].name.slice(),
        deadline: this.currentActions[oldIndex].deadline.slice(),
        catagory: this.currentActions[oldIndex].catagory.slice(),
        completed: this.currentActions[oldIndex].completed
      };
      newCurentActions.splice(newIndex, 0, adding);
    }
    this.currentActions = newCurentActions;
  }


}
