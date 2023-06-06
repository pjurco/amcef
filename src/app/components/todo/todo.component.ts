import { Component, ViewChild, ElementRef } from '@angular/core';
import {  MomentDateAdapter,} from '@angular/material-moment-adapter'; 
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {TodoService} from '../../services/todo.service'
import {ToDo, Task} from './../../todoArray'
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounce } from 'lodash-es'
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { NgxSpinnerService } from "ngx-spinner";


export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class TodoComponent {

  @ViewChild('addtodolistinput', {static: false})  addtodolistinput!: ElementRef
  addtodolistinputFormControl = new FormControl('', [Validators.required]);

  constructor(private todoService: TodoService, private spinner: NgxSpinnerService) {}

  todolist: ToDo[] = []; 
  selectedFilter: string = 'all';
  searchString: string = '';
  spinnerMode: ProgressSpinnerMode = 'indeterminate';


  ngOnInit(): void {
    //this.todolist = this.todoService.getList()
    this.getTodoList()
    
  }

  getTodoList() {
    this.todoService.getList().subscribe(()  => {
      this.todolist = this.todoService.todolist;
    })
  }

  addTodoItem(name: string, event: Event): void {
    event.preventDefault()

    if(!name) return


    this.todoService.addTodoItem(name)
    this.todolist = this.todoService.todolist;
    this.addtodolistinput.nativeElement.value = '';
  }


  remove(removeitem : any) {
    //this.todolist = this.todolist.filter(item => item !== removeitem)
    this.todoService.removeTodoItem(removeitem)
    this.todolist = this.todoService.todolist;
  }


  removeTaskItem($event: Task, listitem: any) {
    this.todolist.filter((item) => {
      if(item === listitem) {
        item.task = item.task.filter(taskitem => taskitem !== $event)
      }
    })
  }


  searchSubmit = debounce((value: string):void => {
    this.spinner.show();
    this.searchString = value
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  },500)

  

}
