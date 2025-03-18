import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todos.action';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.css'],
    standalone: false
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editing = false;
  @ViewChild('inputFisico') txtInputFisico!: ElementRef;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo?.completado)
    this.txtInput      = new FormControl(this.todo?.texto, Validators.required)

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    })
    
  }

  onEdit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.texto)

    setTimeout(()=> this.txtInputFisico.nativeElement.select(), 1)
  }

  finishEdition() {
    this.editing = false;
    if ( this.txtInput.invalid ) return;

    this.store.dispatch(actions.edit({ id: this.todo.id, texto: this.txtInput.value }))
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }
}
