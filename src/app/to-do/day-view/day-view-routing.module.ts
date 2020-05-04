import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DayViewPage } from './day-view.page';

const routes: Routes = [
  {
    path: '',
    component: DayViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DayViewPageRoutingModule {}
