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


  activities: string [] = ['Do Homework', 'write personal statment', 'do some more stuff',
  'write personal statment', 'do some more stuff', 'write personal statment'];
  add: string [] = ['Add Action'];

  dayList: DayItem [] = [
    new DayItem( 1 , 'Action1'),
    new DayItem( 2 , 'Action2'),
    new DayItem( 3 , 'Action3'),
  ];
  beforeDrag: DayItem;


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


  resizeStart(item: DayItem) {
    this.beforeDrag = item;
  }



  onResize(event: ResizeEvent, item: DayItem): void {
    const // these are the declarations for this function;
      heightLim = 100, // change this to change the minimum height of the action
      gapHeight = 20,
      index = this.dayList.findIndex(x => x === item),
      itemRef = this.dayList[index],
      newHeight = event.rectangle.height,
      oldHeight = itemRef.activStyle.heightInt,
      constHeight = this.beforeDrag.aboveStyle.heightInt + this.beforeDrag.activStyle.heightInt,
      aboveHeight = itemRef.aboveStyle.heightInt
    ;

    // Runs when dragging from the bottom hanndle
    if (event.edges.bottom !== undefined && newHeight >= heightLim) { // BOTTOM drag
      console.log('dragging from bottom');

      itemRef.setHeight(newHeight);

    } else if (event.edges.bottom !== undefined && newHeight <= heightLim) {
      itemRef.setHeight(heightLim);
    }

    if (event.edges.bottom === undefined) { // TOP drag
      console.log('dragging from top');
      console.log(constHeight);

      if (newHeight >= heightLim && (aboveHeight > 10 || newHeight < oldHeight)) {
        console.log('shrinking');
        itemRef.setHeight(newHeight);
        itemRef.setAbove(constHeight - newHeight);
      } else if ( newHeight <= heightLim ) {
        itemRef.setHeight(heightLim);
        itemRef.setAbove(constHeight - heightLim);
      } else if ( aboveHeight <= 10 ) {
        itemRef.setAbove(10);
        itemRef.setHeight(constHeight - 10 );
      }
    }
  }

  resizeEnd(event: ResizeEvent) {
    console.log('end');

  }


}

