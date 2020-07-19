import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopOverPage } from './pop-over.page';

const routes: Routes = [
  {
    path: '',
    component: PopOverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopOverPageRoutingModule {}
