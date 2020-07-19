import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionsPageRoutingModule } from './actions-routing.module';

import { ActionsPage } from './actions.page';
import { AddActionPageModule } from '../../add-action/add-action.module';
import { PopOverPageModule } from '../../pop-over/pop-over.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionsPageRoutingModule,
    AddActionPageModule,
    PopOverPageModule
  ],
  declarations: [ActionsPage]
})
export class ActionsPageModule {}
