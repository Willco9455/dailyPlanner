import { Injectable } from '@angular/core';
import { Action } from '../Pages/to-do/item.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  constructor() { }

  actions: Action [] = [
    {
    name: 'Action 1',
    deadline: '2020-06-17',
    catagory: 'None',
    completed: false
    },
    new Action('Name', '2021-06-17', 'Falmily', false)
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
}
