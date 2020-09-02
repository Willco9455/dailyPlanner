import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { ToastController } from '@ionic/angular';
import { ResizeEvent } from 'angular-resizable-element';


class DayItem {
  id: number;
  name: string;
  aboveStyle = {height: '50px', heightInt: 50};
  activStyle = {height: '40px', heightInt: 40};

  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
  }

  setAbove(height: number) {
    this.aboveStyle.heightInt = height;
    this.aboveStyle.height = height.toString() + 'px';
  }
  setHeight(height: number) {
    this.activStyle.heightInt = height;
    this.activStyle.height = height.toString() + 'px';
  }

}

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.page.html',
  styleUrls: ['./test-page.page.scss'],
})
export class TESTPAGEPage implements OnInit {

  activities = ['Do Homework', 'write personal statment', 'do some more stuff',
  'write personal statment', 'do some more stuff', 'write personal statment'];

  add = ['Add Action'];

  dayList: DayItem [] = [
    new DayItem( 1 , 'Action1'),
    new DayItem( 2 , 'Action2'),
    new DayItem( 3 , 'Action3'),
  ];

  resizingElement: {top: number, height: number};

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  replenish() {
    this.add = ['New Action'];
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


  resizeStart(event: ResizeEvent) {
    console.log(event);
    this.resizingElement = {
      top: event.rectangle.top,
      height: event.rectangle.height,
    };
  }



  onResize(event: ResizeEvent, item: DayItem): void {
    console.log('ran');

    const index = this.dayList.findIndex( x => x === item);
    if (
        this.dayList[index].activStyle.heightInt <= 40 &&
        (this.resizingElement.height - event.rectangle.height) > 0
      ) {
      this.dayList[index].setHeight(40);
      return;
    }

    if (event.rectangle.top !== this.resizingElement.top) {

      if (this.dayList[index].aboveStyle.heightInt <= 10 && (this.resizingElement.height - event.rectangle.height) < 0) {
        console.log('cant move past this point');
        this.dayList[index].setAbove(10);
        return;
      }
      this.dayList[index].activStyle.height = `${event.rectangle.height}px`;
      // tslint:disable-next-line: max-line-length
      this.dayList[index].aboveStyle.heightInt = (this.resizingElement.height - event.rectangle.height) + this.dayList[index].aboveStyle.heightInt;
      this.dayList[index].aboveStyle.height = `${this.dayList[index].aboveStyle.heightInt}px`;
      this.resizingElement = {top: event.rectangle.top, height: event.rectangle.height};
      return;
    }

    this.dayList[index].setHeight(event.rectangle.height);
  }


}

