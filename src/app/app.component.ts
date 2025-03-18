import { Component } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TodoPageComponent } from "./todos/todo-page/todo-page.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [FooterComponent, TodoPageComponent]
})
export class AppComponent {
  title = 'todo-app';
}


/* Sacar todos los modulos */
/* Modificar el store */