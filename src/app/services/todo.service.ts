import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToDo} from './../todoArray'
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  todolistSample: ToDo[] =  [
    {
    Id: 1,
    active: true,
    name: 'Todo1',
    task: [{
      title: 'Task1',
      text: 'nejaky textik',
      deadline: '1.1.2024',
      done: false
    }]
    },
    {
      Id: 2,
      active: false,
      name: 'Todo2',
      task: [{
        title: 'Task1',
        text: 'nejaky textik',
        deadline: '1.1.2024',
        done: true
      }]
    }
  ]

  todolist: ToDo[] = [];

  private apiUrl = 'https://647c936dc0bae2880ad0e5ab.mockapi.io/amcef/v1/ZoznamToDo';

 

 
  getList(): Observable<ToDo[]> {
    //return this.todolist;
    /* return this.http.get(`${this.apiUrl}`).subscribe((todolists: any) => {
    this.todolist = todolists
  }); */
  return this.http.get<ToDo[]>(this.apiUrl).pipe(
    tap((todolist: ToDo[]) => {
      this.todolist = todolist;
    })
  );
  }

  getListT() {
    return this.todolist;
    
  }

  addTodoItem(newtodo: string): void {
    this.todolist.push({
      Id: Math.max(...this.todolist.map(d => d.Id)) +1,
      active: false,
      name: newtodo,
      task: []
    })
  }

  removeTodoItem(removeitem : any): void {
    this.todolist = this.todolist.filter(item => item !== removeitem)
  }




}
