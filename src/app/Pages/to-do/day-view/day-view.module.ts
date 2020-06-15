import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DayViewPageRoutingModule } from './day-view-routing.module';

import { DayViewPage } from './day-view.page';
import { AddActivPageModule } from 'src/app/add-activ/add-activ.module';
import { AddModalPageModule } from '../../add-modal/add-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DayViewPageRoutingModule,
    AddActivPageModule,
    AddModalPageModule
  ],
  declarations: [DayViewPage]
})
export class DayViewPageModule {}
