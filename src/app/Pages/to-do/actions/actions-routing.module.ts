import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionsPage } from './actions.page';
import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../../add-modal/add-modal.page';
import { AddActionPageModule } from '../../add-action/add-action.module';


const routes: Routes = [
  {
    path: '',
    component: ActionsPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionsPageRoutingModule {}
