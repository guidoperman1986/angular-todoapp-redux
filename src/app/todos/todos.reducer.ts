import { createReducer, on } from '@ngrx/store';
import { crear, toggle, edit, deleteTodo, toggleAll, deleteAll } from './todos.action';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
  new Todo('Learn Angular'),
  new Todo('Learn Typescript'),
  new Todo('Learn Redux'),
  new Todo('Learn CSS'),
  new Todo('Repeat'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  }),
  on(deleteTodo, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(toggleAll, (state, { completed }) =>
    state.map((todo) => ({
      ...todo,
      completado: completed,
    }))
  ),
  on(deleteAll, (state) => state.filter( todo => !todo.completado ))
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
