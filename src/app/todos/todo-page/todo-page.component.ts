import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todos.action'

@Component({
    selector: 'app-todo-page',
    templateUrl: './todo-page.component.html',
    styleUrls: ['./todo-page.component.css'],
    standalone: false
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  toggleAll() {
    this.completado = !this.completado

    this.store.dispatch(actions.toggleAll({completed: this.completado}));
  }

}
