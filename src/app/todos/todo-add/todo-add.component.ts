import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todos.action'

@Component({
    selector: 'app-todo-add',
    templateUrl: './todo-add.component.html',
    styleUrls: ['./todo-add.component.css'],
    imports: [ReactiveFormsModule]
})
export class TodoAddComponent {
  txtInput!: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', [Validators.required])
  }

  addTodo() {
    if (this.txtInput.invalid) return;

    this.store.dispatch(actions.crear({texto: this.txtInput.value}))

    this.txtInput.reset();
  }

}
