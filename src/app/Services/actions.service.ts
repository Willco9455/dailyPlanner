import { Injectable } from '@angular/core';
import { Action } from '../Pages/to-do/item.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }

  actions: Action [] = [
    new Action('Action1', '2020-06-17', 'Free', true),
    new Action('Name', '2021-06-17', 'Falmily', false),
    new Action('Not another name', '2017-03-14', 'Work', false)
  ];

  catagories = ['None', 'Work', 'Free', 'Family'];

  getCata() {
    return [...this.catagories];
  }

  getActions() {
    return [...this.actions];
  }

  addAction(name: string, deadline: string, catagory: string, completed: boolean) {
    const adding = new Action(name, deadline, catagory, completed);
    this.actions.splice(0, 0, adding);
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

}
