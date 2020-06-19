import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddActivPageRoutingModule } from './add-activ-routing.module';

import { AddActivPage } from './add-activ.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddActivPageRoutingModule
  ],
  declarations: [AddActivPage]
})
export class AddActivPageModule {}
