import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeekViewPageRoutingModule } from './week-view-routing.module';

import { WeekViewPage } from './week-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeekViewPageRoutingModule
  ],
  declarations: [WeekViewPage]
})
export class WeekViewPageModule {}
