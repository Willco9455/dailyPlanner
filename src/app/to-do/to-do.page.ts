import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ToDoService } from '../to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  constructor(private toDoService: ToDoService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }



}
