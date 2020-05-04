import { Component, OnInit } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { Item } from '../item.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-view',
  templateUrl: './all-view.page.html',
  styleUrls: ['./all-view.page.scss'],
})
export class AllViewPage implements OnInit {

  items: Item[];
  constructor(private toDoService: ToDoService, private navController: NavController) { }

  ngOnInit() {
  }

  addActiv() {
    this.navController.navigateRoot(['/add-activ']);
  }

  ionViewWillEnter() {
    this.items = this.toDoService.getToDo();
    this.toDoService.viewSelec = 'to-do/tabs/all-view';
  }
}
