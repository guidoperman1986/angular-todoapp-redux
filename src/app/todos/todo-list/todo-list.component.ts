import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.action';
import { NgFor } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FiltroPipe } from '../filtro.pipe';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
    imports: [NgFor, TodoItemComponent, FiltroPipe]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  actualFilter!: filtrosValidos;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
      // this.store.select('todos').subscribe(todos=>this.todos = todos);
      // this.store.pipe(select('todos')).subscribe(todos => this.todos = todos)

      this.store.subscribe(state=>{
        this.todos = state.todos;
        this.actualFilter = state.filter
      })
  }

}
