import { Todo } from "./models/todo.model";
import { crear, toggle } from "./todos.action";
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
        console.log(idToToggle)
        const action = toggle({ id: idToToggle });
        const state = todoReducer(initialState, action);
        
        const toggledTodo = state.find(todo => todo.id === idToToggle);
        expect(toggledTodo).toBeTruthy();
        expect(toggledTodo?.completado).toBe(!initialState[0].completado);
        
    })
})