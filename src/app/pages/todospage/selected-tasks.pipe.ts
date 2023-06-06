import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './../../todoArray'

@Pipe({
  name: 'selectedTasks'
})
export class SelectedTasksPipe implements PipeTransform {
  sortedTask: any = [];
  transform(tasks: Task[], done: string, search: string): Task[] {
    if(search && search != '') {
      this.sortedTask = tasks.filter(task => (task.title.toLowerCase().includes(search.toLowerCase()) || task.text.toLowerCase().includes(search.toLowerCase())));
      if(this.sortedTask.length > 0) {
        return this.sortedTask
      }else {
        return this.sortedTask
      }
    }else {
      switch (done) {
        case 'completed':
          return tasks.filter(task => task.done == true);
          break;
        case 'notCompleted':
          return tasks.filter(task => task.done == false);
          break;
        default:
          return tasks
          break;
      }  
    }
    
  }
}