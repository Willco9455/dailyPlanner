import { Component, OnInit } from '@angular/core';
import { DayService } from '../day.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  constructor(private dayService: DayService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }



}
