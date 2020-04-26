import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  items: Item[];

  constructor(private toDoService: ToDoService) { }

  ngOnInit() { }

  ionViewWillEnter() {
    this.items = this.toDoService.getToDo();
    console.log(this.items);
  }

  clicked() {
    console.log(this.items);
  }


}
