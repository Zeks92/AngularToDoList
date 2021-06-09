import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/todo.model';
import { TodoListService } from '../todo-list.service';
import { Router, ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'td-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})

export class TodoEditComponent implements OnInit {

  todo: Todo;
  id: any;

  constructor(
      private todoService: TodoListService,
      private router: Router,
      private routeActive: ActivatedRoute
      ) { }

  ngOnInit() {
    this.todo = new Todo(0, '');
    this.id = this.routeActive.snapshot.params['id'];
    
    if (this.id) {
      this.todo = this.todoService.onGet(parseInt(this.id)); 
      console.log(this.todo);
     }
  }

  onAddTodo(form: NgForm) {
    
    if (!this.id) {
      this.todo.id = this.todoService.onGetNewId();
      this.todo.name = form.value['idInput'];
      this.todoService.onAdd(this.todo); 
    }
    else {
      this.todo.id = this.id;
      this.todo.name = form.value['idInput'];
      this.todoService.onEdit(this.todo);
    }
    this.router.navigate(['/list']);
  }
}
