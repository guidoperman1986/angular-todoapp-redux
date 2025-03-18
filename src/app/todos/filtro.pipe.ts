import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.action';

@Pipe({
    name: 'filtroTodo',
    standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {

    switch(filtro) {
      case 'all': 
        return todos;
      case 'completed':
        return todos.filter(todo => todo.completado);
      case 'pending':
        return todos.filter(todo => !todo.completado);
    }
    
  }

}
