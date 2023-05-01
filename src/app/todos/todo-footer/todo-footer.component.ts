import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtrosValidos, setFilter } from '../../filtro/filtro.action';
import { deleteAll } from '../todos.action';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {
  actualFilter: filtrosValidos = 'all';
  filters: filtrosValidos[] = ['all','completed','pending']
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter=>this.actualFilter = filter);
    this.store.subscribe(state=>{
      this.actualFilter = state.filter
      this.pending = state.todos.filter(todo => todo.completado === false).length
    
    });
  }

  setFilter(filter: filtrosValidos) {
    this.store.dispatch(setFilter({filter}))
  }

  clearCompleted() {
    this.store.dispatch(deleteAll())
  }

}
