import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TESTPAGEPageRoutingModule } from './test-page-routing.module';

import { TESTPAGEPage } from './test-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TESTPAGEPageRoutingModule
  ],
  declarations: [TESTPAGEPage]
})
export class TESTPAGEPageModule {}
