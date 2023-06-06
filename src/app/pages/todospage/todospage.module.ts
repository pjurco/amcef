import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

import { TodospageRoutingModule } from './todospage-routing.module';
import { TodospageComponent } from './todospage.component';

//components
import { TodoComponent } from './../../components/todo/todo.component';
import { TaskComponent } from './../../components/task/task.component';
import { AddtaskComponent } from './../../components/addtask/addtask.component';

//materials
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { NgxSpinnerModule } from 'ngx-spinner';

//pipe
import { SelectedTasksPipe } from './selected-tasks.pipe';
import { SelectedTasksCountPipe } from './selected-tasks-count.pipe';


@NgModule({
  declarations: [
    TodospageComponent,
    SelectedTasksPipe,
    SelectedTasksCountPipe,
    TodoComponent,
    TaskComponent,
    AddtaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule,
    TodospageRoutingModule,
  ]
})
export class TodospageModule { }
