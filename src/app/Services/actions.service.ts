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

  currentActions = this.actions.slice();

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

  updateAction(old: Action, neww: Action) {
    const index = this.actions.findIndex(x => x === old);
    this.actions.splice(index, 1, neww);
    this.updateCurrent();
  }


  // these are the getters and setters for the selected view variable used by the popover
  getSelecView() {
    return this.selectedView;
  }

  setSelecView(newVal: string) {
    this.selectedView = newVal;
  }

  setDayView() {
    const results = this.actions.filter( x => x.deadline === this.timeService.getDate());
    this.currentActions = results;
  }

  // function that updates the current actions in view when the main actions array is changed
  updateCurrent() {
    if (this.selectedView === 'all') {
      this.currentActions = this.actions.slice();
    } else if (this.selectedView === 'day') {
      this.setDayView();
    }
  }
}
