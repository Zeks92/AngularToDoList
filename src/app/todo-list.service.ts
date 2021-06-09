import { Injectable } from '@angular/core';
import { Todos, Todo } from './todo-list/todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  todolist: Todos = [];
  
  constructor() { 
  }

  onGetAll(): Todos {
    return this.todolist;
  }

  onGet(id: number): Todo {
    let todo : Todo;

    this.todolist.forEach(iNew => {
      if(iNew.id === id){
        todo = iNew;
      }
    })
    return todo;
  }

  onGetNewId(): number {
    let id = [];
    this.todolist.forEach(iNew => {
      id.push(iNew.id);
    });
    if(!id.length){
      return 1;
    }
    else{
      return Math.max(...id) + 1;
    }
      
  }
  onAdd(todo : Todo){
   this.todolist.push(todo);
  }

  onEdit(todo : Todo){
    this.todolist.forEach(iNew => {
      if(iNew.id === todo.id) {
        iNew.name = todo.name;
      };
    });
  }

  onDelete(id: number){
    this.todolist.forEach((iNew, index, object) => {
      if(id === iNew.id){
        object.splice(index, 1);
      }
    })
  }
}
