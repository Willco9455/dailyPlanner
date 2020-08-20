import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TESTPAGEPage } from './test-page.page';

const routes: Routes = [
  {
    path: '',
    component: TESTPAGEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TESTPAGEPageRoutingModule {}
