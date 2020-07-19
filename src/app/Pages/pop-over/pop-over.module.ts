import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopOverPageRoutingModule } from './pop-over-routing.module';

import { PopOverPage } from './pop-over.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopOverPageRoutingModule
  ],
  declarations: [PopOverPage]
})
export class PopOverPageModule {}
