import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  { path: 'kontakt', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule), canActivate: [AuthGuard] },
  { path: 'todos', loadChildren: () => import('./pages/todospage/todospage.module').then(m => m.TodospageModule), canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
