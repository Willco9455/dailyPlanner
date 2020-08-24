import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { ToastController } from '@ionic/angular';
import { ResizeEvent } from 'angular-resizable-element';



@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TESTPAGEPage implements OnInit {

  activities = ['Do Homework', 'write personal statment', 'do some more stuff',
  'write personal statment', 'do some more stuff', 'write personal statment'];
  add = ['Add Action'];

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  replenish() {
    this.add = ['New Action'];
  }

  draging() {
    console.log('drag started');
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Drag and Drop',
      duration: 2000
    });
    toast.present();
    document.getElementById('resize').style.backgroundColor = 'blue';
  }

  actionClicked() {
    this.presentToast();
    console.log('cool');
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }



  onResizeEnd(event: ResizeEvent): void {
    document.getElementById('resize').style.backgroundColor = 'blue';
    document.getElementById('resize').style.bottom = event.rectangle.bottom.toString();
    document.getElementById('resize').style.height = event.rectangle.height.toString() + 'px';
    document.getElementById('resize').style.left = event.rectangle.left.toString();
    document.getElementById('resize').style.right = event.rectangle.right.toString();
    document.getElementById('resize').style.top = event.rectangle.top.toString();
    document.getElementById('resize').style.width = event.rectangle.width.toString() + 'px';
  }


}

