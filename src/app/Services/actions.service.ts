import { Injectable } from '@angular/core';
import { Action } from '../Pages/to-do/item.model';
import { TimeService } from './time.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor(private timeService: TimeService) { }

  actions: Action [] = [
    new Action('Action1', '2020-07-20', 'Free', true),
    new Action('Name', '2020-07-21', 'Family', false),
    new Action('Not another name', '2020-07-20', 'Work', false)
  ];

  currentActions = this.copyActions();

  catagories = ['None', 'Work', 'Free', 'Family'];

  selectedView = 'all';

  getCata() {
    return [...this.catagories];
  }

  getActions() {
    return [...this.currentActions];
  }

  addAction(name: string, deadline: string, catagory: string, completed: boolean) {
    const adding = new Action(name, deadline, catagory, completed);
    this.actions.splice(0, 0, adding);
    this.updateCurrent();
  }

  deleteAction(action: Action) {
    const index = this.actions.findIndex(x => x === action);
    this.actions.splice(index, 1);
  }

  moveAction(from: number, to: number) {
    const action = this.actions[from];
    this.actions.splice(from, 1);
    this.actions.splice(to, 0, action);
    console.log(this.actions);
  }

  logAction() {
    console.log(this.actions);
  }

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

  updateAction(old: Action, neww: Action) {
    const index = this.actions.findIndex(x => this.checkActEq(x, old));
    console.log(index);
    this.actions.splice(index, 1, neww);
    console.log(this.actions);
    this.updateCurrent();
  }


  // these are the getters and setters for the selected view variable used by the popover
  getSelecView() {
    return this.selectedView;
  }

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
  }

  // sets the curent actions varaible to the actions just for the current day, runs when day view is selected
  setDayView() {
    const results = this.actions.filter( x => x.deadline === this.timeService.getDate());
    this.currentActions = results;
  }

  setWeekView() {
    const weekAry = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const week = this.timeService.getWeekRange();
    const results = this.copyActions().filter( x =>
      week.includes(x.deadline)
    );
    this.currentActions = results;
    for (const i of this.currentActions) {
      const pos = this.currentActions.indexOf(i);
      const dayPos = week.indexOf(this.currentActions[pos].deadline);
      this.currentActions[pos].deadline = weekAry[dayPos];
    }
    console.log('actions', this.actions);
  }

  // creates a deep copy of the actions array
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


}
