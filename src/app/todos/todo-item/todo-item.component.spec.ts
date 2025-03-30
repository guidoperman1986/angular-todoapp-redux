import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { appReducers } from 'src/app/app.reducer';
import { deleteTodo, edit } from '../todos.action';
import { TodoItemComponent } from './todo-item.component';
import { FormControl } from '@angular/forms';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let store: MockStore;
  const initialState = [{ id: 0, texto: 'Roberto', completado: false }]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [
        StoreModule.forRoot(appReducers),
        TodoItemComponent,
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;

    component.todo = { id: 0, texto: 'un test', completado: false }
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set chkCompletado and txtInput onInit hook', () => {
    component.todo = { id: 1, texto: 'Test Todo', completado: false };

    component.ngOnInit();

    expect(component.chkCompletado).not.toBeNull();
    expect(component.txtInput.value).toBe(component.todo.texto);
  })

  it('should enable editing mode and set input value', fakeAsync(() => {
    component.txtInputFisico = {
      nativeElement: {
        select: jasmine.createSpy('select')
      }
    };

    // Set the todo input
    component.todo = { id: 1, texto: 'Test Todo', completado: false };
    component.txtInput = new FormControl('');

    // Call the onEdit method
    component.onEdit();

    // Verify that editing mode is enabled
    expect(component.editing).toBeTrue();

    // Verify that the input value is set to the todo's texto
    expect(component.txtInput.value).toBe('Test Todo');

    // Simulate the timeout
    tick(1);

    // Verify that the nativeElement.select() method was called
    expect(component.txtInputFisico.nativeElement.select).toHaveBeenCalled();
  }));

  it('should have delete button', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.destroy');
    expect(button).toBeTruthy();
  })

  it('should delete todo', () => {
    const spy = spyOn(store, 'dispatch');

    component.deleteTodo();

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(deleteTodo({ id: component.todo.id }))
  })

  it('should not dispatch when the input is invalid', fakeAsync(() => {
    component.txtInput = new FormControl('')

    component.txtInput.setErrors({ required: true })
    tick();

    const spy = spyOn(store, 'dispatch');

    component.finishEdition()

    expect(spy).not.toHaveBeenCalled()
  }))

  it('should finish todo edition', fakeAsync(() => {
    component.txtInput = new FormControl('un test')
    tick();

    const spy = spyOn(store, 'dispatch');

    component.finishEdition()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(edit({ id: 0, texto: 'un test' }))
  }))





});