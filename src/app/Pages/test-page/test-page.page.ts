import { Component, OnInit } from '@angular/core';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

import { ToastController } from '@ionic/angular';
import { ResizeEvent } from 'angular-resizable-element';


class DayItem {
  id: number;
  name: string;
  aboveStyle = {height: '50px', heightInt: 50};
  activStyle = {height: '60px', heightInt: 60};

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
  beforeDragBelow: DayItem;


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
    const index = this.dayList.findIndex(x => x === item);
    this.beforeDrag = item;
    this.beforeDragBelow = this.dayList[index + 1];
  }


  // runs while a item is bieng resized
  onResize(event: ResizeEvent, item: DayItem): void {
    const // these are the declarations for this function;
      heightLim = 60, // change this to change the minimum height of the action
      index = this.dayList.findIndex(x => x === item),
      itemRef = this.dayList[index],
      newHeight = event.rectangle.height,
      oldHeight = itemRef.activStyle.heightInt,
      constHeight = this.beforeDrag.aboveStyle.heightInt + this.beforeDrag.activStyle.heightInt,
      aboveHeight = itemRef.aboveStyle.heightInt
    ;

    // Runs when dragging from the bottom hanndle
    if (event.edges.bottom !== undefined ) { // BOTTOM drag
      console.log('dragging from bottom');
      // when the dragable element is bieng expanded
      if (newHeight > oldHeight) {
        console.log('expanding');

        if (index + 1 === this.dayList.length) {
          itemRef.setHeight(newHeight);
        } else {
          const belowRef = this.dayList[index + 1];
          const belowConstHeight = this.beforeDrag.activStyle.heightInt + this.beforeDragBelow.aboveStyle.heightInt;
          const newBelowHeight = belowConstHeight - newHeight;
          if (newBelowHeight < 10) {
            belowRef.setAbove(10);
            itemRef.setHeight(belowConstHeight - 10);
            return;
          }
          if (belowRef.aboveStyle.heightInt > 10) {
            itemRef.setHeight(newHeight);
            belowRef.setAbove(belowConstHeight - newHeight);
          }
        }
      } else { // when the dragable element is shrinking
        console.log('shrinking');

        if (index + 1 === this.dayList.length) { // runs when draging the last element in the list
          if (newHeight <= heightLim) {
            itemRef.setHeight(heightLim);
          } else {
            itemRef.setHeight(newHeight);
          }
        } else { // runs when dragging any other element in the list
          const belowRef = this.dayList[index + 1];
          const belowConstHeight = this.beforeDrag.activStyle.heightInt + this.beforeDragBelow.aboveStyle.heightInt;

          if (newHeight <= heightLim) { // runs when tring to shrink the element below the height limit
            itemRef.setHeight(heightLim);
            belowRef.setAbove(belowConstHeight - heightLim);
          } else { // runs for any other time an item is bieng shrunk
            itemRef.setHeight(newHeight);
            belowRef.setAbove(belowConstHeight - newHeight);
          }
        }
      }


    }

    // Runs when dragging from the top handle
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

