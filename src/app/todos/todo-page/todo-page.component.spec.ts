import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoPageComponent } from './todo-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';
import { TodoAddComponent } from '../todo-add/todo-add.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFooterComponent } from '../todo-footer/todo-footer.component';
import { FiltroPipe } from '../filtro.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { toggleAll } from '../todos.action';

describe('TodoPageComponent', () => {
  let component: TodoPageComponent;
  let fixture: ComponentFixture<TodoPageComponent>;
  let store: MockStore;
  const initialState = [{ id: 0, texto: 'Roberto', completado: false }];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        TodoPageComponent,
        TodoAddComponent,
        TodoListComponent,
        TodoFooterComponent,
        FiltroPipe
      ],
      providers: [provideMockStore({ initialState })],

    }).compileComponents();
    fixture = TestBed.createComponent(TodoPageComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch toggleAll action', () => {
    const spyStore = spyOn(store, 'dispatch');

    component.toggleAll();

    expect(spyStore).toHaveBeenCalled();
    expect(spyStore).toHaveBeenCalledWith(toggleAll({ completed: true }));
  })
});
