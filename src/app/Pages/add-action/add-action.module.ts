import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddActionPageRoutingModule } from './add-action-routing.module';

import { AddActionPage } from './add-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActionPageRoutingModule
  ],
  declarations: [AddActionPage]
})
export class AddActionPageModule {}
