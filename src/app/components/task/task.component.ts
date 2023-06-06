import { Component, Input, Output, EventEmitter, } from '@angular/core';
import {Task} from './../../todoArray';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})



export class TaskComponent  {

  @Input() tasks: Task[] = [];
  @Input() selectedTasks: string = 'all';
  @Input() searchString: string = ''; 

  @Output() removeTask = new EventEmitter<Task>()

  remove(task: Task) {
    //console.dir(task)
    this.removeTask.emit(task)
  }

  ngOnInit(): void {
  }


}
