import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todos.action'
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
    imports: [TodoAddComponent, TodoListComponent, TodoFooterComponent]
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completado = !this.completado

    this.store.dispatch(actions.toggleAll({completed: this.completado}));
  }

}
