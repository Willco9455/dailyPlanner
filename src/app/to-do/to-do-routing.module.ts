import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToDoPage } from './to-do.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ToDoPage,
    children: [
      {
        path: 'day-view',
        loadChildren: () => import('./day-view/day-view.module').then( m => m.DayViewPageModule),
      },
      {
        path: 'actions',
        loadChildren: () => import('./actions/actions.module').then( m => m.ActionsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/to-do/tabs/day-view',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoPageRoutingModule {}
