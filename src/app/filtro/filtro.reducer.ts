import { Action, createReducer, on } from '@ngrx/store';
import { filtrosValidos, setFilter } from './filtro.action';

export const initialState: filtrosValidos = 'all'

const _filtroReducer = createReducer<filtrosValidos, Action>(
  initialState,
  on(setFilter, (state, { filter }) => filter),
);

export function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}