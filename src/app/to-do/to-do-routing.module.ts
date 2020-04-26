import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoPage } from './to-do.page';

const routes: Routes = [
  {
    path: '',
    component: ToDoPage
  },
  {
    path: 'add-activ',
    loadChildren: () => import('./add-activ/add-activ.module').then( m => m.AddActivPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoPageRoutingModule {}
