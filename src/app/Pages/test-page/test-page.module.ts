import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TESTPAGEPageRoutingModule } from './test-page-routing.module';

import { TESTPAGEPage } from './test-page.page';


import { DragDropModule } from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TESTPAGEPageRoutingModule,
    DragDropModule,
    ResizableModule
  ],
  declarations: [TESTPAGEPage]
})
export class TESTPAGEPageModule {}
