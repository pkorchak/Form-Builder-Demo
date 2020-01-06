import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'pre-built', loadChildren: () => import('./pages/pre-built-forms/pre-built-forms.module').then(m => m.PreBuiltFormsModule)},
  {path: 'create', loadChildren: () => import('./pages/create-form/create-form.module').then(m => m.CreateFormModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
