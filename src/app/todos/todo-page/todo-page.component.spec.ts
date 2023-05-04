import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageComponent } from './todo-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { FiltroPipe } from '../filtro.pipe';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;
  let store: MockStore;
  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        TodoPageComponent,
        TodoAddComponent,
        TodoListComponent,
        TodoFooterComponent,
        FiltroPipe,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
