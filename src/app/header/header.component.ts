import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {

  }

}
