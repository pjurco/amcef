import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodospageComponent } from './todospage.component';

const routes: Routes = [{ path: '', component: TodospageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodospageRoutingModule { }
