import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { DayService } from 'src/app/Services/day.service';

import { ModalController } from '@ionic/angular';
import { DayItem } from '../item.model';

import { ResizeEvent } from 'angular-resizable-element';



@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.page.html',
  styleUrls: ['./day-view.page.scss'],
})
export class DayViewPage implements OnInit {

  dayList: DayItem [];
  edditing = false;
  beforeDrag: DayItem;
  beforeDragBelow: DayItem;
  background: object;

  constructor(
    private dayService: DayService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.dayList = this.dayService.getDayList();
  }

  ionViewWillEnter() {
    this.resetTimings();
  }

  edit() {
    this.edditing = !this.edditing;
  }

  resetTimings() {
    this.dayService.setTimings();
    this.dayList = this.dayService.getDayList();
  }


  // this function is used to convert to a normal data format and is used to se minimum time for endtime input
  getRegTime(ionV: any)  {
    if (ionV !== undefined) {
      return this.dayService.ionTimeConvert(ionV);
    } else {
      return '00:00';
    }
  }

  resizeStart(item: DayItem) {
    const index = this.dayList.findIndex(x => x === item);
    this.beforeDrag = item;
    this.beforeDragBelow = this.dayList[index + 1];
    // this.background = {position: 'fixed'};
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
    this.resetTimings();
  }

  resizeEnd() {
    // this.background = {position: 'absolute'};
  }


}
