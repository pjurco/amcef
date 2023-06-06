import { Pipe, PipeTransform } from '@angular/core';
import { Task } from './../../todoArray'

@Pipe({
  name: 'selectedTasksCount'
})
export class SelectedTasksCountPipe implements PipeTransform {
  sortedTask: any = [];
  transform(tasks: Task[], done: string, search: string): number {
    if(search && search != '') {
      this.sortedTask = tasks.filter(task => (task.title.toLowerCase().includes(search.toLowerCase()) || task.text.toLowerCase().includes(search.toLowerCase())));
      if(this.sortedTask.length > 0) {
        return this.sortedTask.length
      }else {
        return this.sortedTask.length
      }
    }else {
      switch (done) {
        case 'completed':
          return tasks.filter(task => task.done == true).length;
          break;
        case 'notCompleted':
          return tasks.filter(task => task.done == false).length;
          break;
        default:
          return tasks.length
          break;
      }  
    }
    
  }
}