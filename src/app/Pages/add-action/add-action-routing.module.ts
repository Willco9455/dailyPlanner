import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddActionPage } from './add-action.page';

const routes: Routes = [
  {
    path: '',
    component: AddActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddActionPageRoutingModule {}
