import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllViewPageRoutingModule } from './all-view-routing.module';

import { AllViewPage } from './all-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllViewPageRoutingModule
  ],
  declarations: [AllViewPage]
})
export class AllViewPageModule {}
