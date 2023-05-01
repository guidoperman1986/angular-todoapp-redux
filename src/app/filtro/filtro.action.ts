import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filter: filtrosValidos }>()
);
