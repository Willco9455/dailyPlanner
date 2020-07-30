import { Component, OnInit } from '@angular/core';
import { DayService } from '../../Services/day.service';
import { StorageService } from 'src/app/Services/storage.service';
import { ThrowStmt } from '@angular/compiler';
import { ActionsService } from 'src/app/Services/actions.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})
export class ToDoPage implements OnInit {

  constructor(private storageService: StorageService, private actionService: ActionsService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }



}
