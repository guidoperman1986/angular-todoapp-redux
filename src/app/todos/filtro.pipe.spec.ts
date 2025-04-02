import { FiltroPipe } from './filtro.pipe';
import { Todo } from './models/todo.model';

describe('FiltroPipe', () => {


  it('create an instance', () => {
    const pipe = new FiltroPipe();
    expect(pipe).toBeTruthy();
  });


  it('should return all todos', () => {
    const todos: Todo[] = [
      { id: 1, texto: 'Todo 1', completado: false },
      { id: 2, texto: 'Todo 2', completado: true },
      { id: 3, texto: 'Todo 3', completado: false },
      { id: 4, texto: 'Todo 4', completado: true },
    ];

    const pipe = new FiltroPipe();
    let filteredTodos = pipe.transform(todos, 'all');

    expect(filteredTodos.length).toEqual(todos.length);

    filteredTodos = pipe.transform(todos, 'completed');
    expect(filteredTodos.length).toEqual(2)

    filteredTodos.forEach(todo => expect(todo.completado).toBeTruthy())

    filteredTodos = pipe.transform(todos, 'pending');
    expect(filteredTodos.length).toEqual(2)

    filteredTodos.forEach(todo => expect(todo.completado).toBeFalsy())
  })
});
