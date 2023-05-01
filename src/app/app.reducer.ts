import { ActionReducerMap } from '@ngrx/store';
import { filtrosValidos } from './filtro/filtro.action';
import { filtroReducer } from './filtro/filtro.reducer';
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todos.reducer';

export interface AppState {
    todos: Todo[],
    filter: filtrosValidos
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filtroReducer
}