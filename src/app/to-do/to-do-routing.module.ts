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
        path: 'week-view',
        loadChildren: () => import('./week-view/week-view.module').then( m => m.WeekViewPageModule)
      },
      {
        path: 'all-view',
        loadChildren: () => import('./all-view/all-view.module').then( m => m.AllViewPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/to-do/tabs/day-view',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToDoPageRoutingModule {}
