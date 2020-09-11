import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayViewPageRoutingModule } from './day-view-routing.module';

import { DayViewPage } from './day-view.page';
import { AddActivPageModule } from 'src/app/Pages/add-activ/add-activ.module';
import { ResizableModule } from 'angular-resizable-element';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayViewPageRoutingModule,
    AddActivPageModule,
    ResizableModule
  ],
  declarations: [DayViewPage]
})
export class DayViewPageModule {}
