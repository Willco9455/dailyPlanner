import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'to-do', pathMatch: 'full' },
  {
    path: 'to-do',
    loadChildren: () => import('./Pages/to-do/to-do.module').then( m => m.ToDoPageModule)
  },
  {
    path: 'add-activ',
    loadChildren: () => import('./Pages/add-activ/add-activ.module').then( m => m.AddActivPageModule)
  },
  {
    path: 'add-action',
    loadChildren: () => import('./Pages/add-action/add-action.module').then( m => m.AddActionPageModule)
  },
  {
    path: 'pop-over',
    loadChildren: () => import('./Pages/pop-over/pop-over.module').then( m => m.PopOverPageModule)
  },
  {
    path: 'test-page',
    loadChildren: () => import('./Pages/test-page/test-page.module').then( m => m.TESTPAGEPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
