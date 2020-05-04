import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekViewPage } from './week-view.page';

const routes: Routes = [
  {
    path: '',
    component: WeekViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekViewPageRoutingModule {}
