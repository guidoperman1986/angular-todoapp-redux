import { Todo } from "./models/todo.model";
import { crear, deleteAll, edit, toggle, toggleAll } from "./todos.action";
import { todoReducer, initialState } from "./todos.reducer";

describe('todos reducer', () => {
    it('should add a new todo on crear action', () => {
        const newTodoText = 'Learn Testing';
        const action = crear({ texto: newTodoText });
        const state = todoReducer(initialState, action);

        expect(state.length).toBe(initialState.length + 1);
        expect(state[state.length - 1].texto).toBe(newTodoText);
        expect(state[state.length - 1].completado).toBe(false);
    })

    it('should act when toggling todo', () => {
        const idToToggle = initialState[0].id;
        const action = toggle({ id: idToToggle });
        const state = todoReducer(initialState, action);

        const toggledTodo = state.find(todo => todo.id === idToToggle);
        expect(toggledTodo).toBeTruthy();
        expect(toggledTodo?.completado).toBe(!initialState[0].completado);
    })

    it('should toggle all todos', () => {
        const action = toggleAll({ completed: true });
        const state = todoReducer(initialState, action);

        state.forEach(todo => {
            expect(todo.completado).toBeTruthy();
        })

    })

    it('should edit todo', () => {
        const newText = 'this is edited text'
        const idToEdit = initialState[0].id;
        const action = edit({ id: idToEdit, texto: newText });
        const state = todoReducer(initialState, action);

        const editedTodo = state.find(todo => todo.id === idToEdit);
        expect(editedTodo).toBeTruthy();
        expect(editedTodo?.texto).toBe(newText);
    })

    it('delete All completed todos', () => {
        const customInitialState: Todo[] = [
            { id: 1, texto: 'Todo 1', completado: false },
            { id: 2, texto: 'Todo 2', completado: true },
            { id: 3, texto: 'Todo 3', completado: false },
            { id: 4, texto: 'Todo 4', completado: true },
        ];

        const action = deleteAll();
        const state = todoReducer(customInitialState, action);
        
        expect(state.length).toBe(2);
        expect(state.every(todo => !todo.completado)).toBe(true);
        expect(state).toEqual([
            { id: 1, texto: 'Todo 1', completado: false },
            { id: 3, texto: 'Todo 3', completado: false },
        ]);

    })
})