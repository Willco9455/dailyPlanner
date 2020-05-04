import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllViewPage } from './all-view.page';

const routes: Routes = [
  {
    path: '',
    component: AllViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllViewPageRoutingModule {}
