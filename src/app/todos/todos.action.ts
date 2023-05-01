import { createAction, props } from "@ngrx/store";

export const crear = createAction(
    '[TODO] Crear Todo',
    props<{texto: string}>()
)

export const toggle = createAction(
    '[TODO] Toogle Todo',
    props<{id: number}>()
)

export const edit = createAction(
    '[TODO] Edit Todo',
    props<{id: number, texto: string}>()
)

export const deleteTodo = createAction(
    '[TODO] Delete Todo',
    props<{id: number}>()
)

export const toggleAll = createAction(
    '[TODO] Toggle All Todos',
    props<{completed: boolean}>()
)

export const deleteAll = createAction(
    '[TODO] Delete All Todos'
)