import { Injectable } from '@angular/core';
import { Item } from './to-do/item.model';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  constructor() { }

  private items: Item[] = [
    {
      name: 'homework',
      completed: true,
      compDate: '2000-04-13',
      compTime: '00:00'
    },
    {
      name: 'make app',
      completed: false,
      compDate: '2000-04-13',
      compTime: '00:00'
    },
    {
      name: 'do nothing',
      completed: false,
      compDate: '2000-04-13',
      compTime: '00:00'
    }
  ];

  getToDo() {
    return [...this.items];
  }

  addToDo(activName: string, activDate: string, activTime: string) {
    const adding: Item = {
      name: activName,
      completed: false,
      compDate: activDate,
      compTime: activTime
    };
    this.items.push(adding);
  }
}
