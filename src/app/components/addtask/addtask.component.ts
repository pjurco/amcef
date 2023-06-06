import { Component, Input } from '@angular/core';
import {TodoService} from '../../services/todo.service'
import {ToDo} from './../../todoArray'



@Component({
  selector: 'addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent {

  constructor(private todoService: TodoService) {}

  @Input() listitem: ToDo[] =[]
  todolist: ToDo[] =  this.todoService.todolist;


  ngOnInit(): void {
    //this.todolist = this.todoService.getList()
   /*  this.todoService.getList().subscribe(()  => {
      this.todolist = this.todoService.todolist;
    }) */
  }

  addTaskItem(listitem: ToDo[], event: any) {
    event.preventDefault();

    this.todolist.filter((item) => {
      if(item === listitem[0]) {
        item.task.push({
          title: event.target.taskname.value,
          text: event.target.tasktext.value,
          deadline: event.target.deadline.value,
          done: false
        })
      }
    })

    event.target.taskname.value= ''
    event.target.tasktext.value = ''
    event.target.deadline.value= ''

  }
}
