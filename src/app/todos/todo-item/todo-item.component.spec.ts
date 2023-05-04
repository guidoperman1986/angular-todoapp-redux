import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { appReducers } from 'src/app/app.reducer';
import { deleteTodo, edit } from '../todos.action';
import { TodoItemComponent } from './todo-item.component';
/* import { initialState } from '../todos.reducer'; */
import { FormControl } from '@angular/forms';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let store: MockStore;
  const initialState = [{id: 0, texto: 'Roberto', completado: false}]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      providers: [
        provideMockStore({initialState})
      ],
      imports: [
        StoreModule.forRoot(appReducers),
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

  it('should delete todo', ()=> {

    const spy = spyOn(store, 'dispatch');
    
    component.deleteTodo();

    expect(spy).toHaveBeenCalled()   
    expect(spy).toHaveBeenCalledWith(deleteTodo({ id: component.todo.id }))   
  })

  it('should not dispatch when the input is invalid', fakeAsync(() => {
    component.txtInput = new FormControl('')
    
    component.txtInput.setErrors({required: true})
    tick();

    const spy = spyOn(store, 'dispatch');

    component.finishEdition()

    expect(spy).not.toHaveBeenCalled()
  }))

  //create a test
  it('should finish todo edition', fakeAsync(() => {
    component.txtInput = new FormControl('un test')
    tick();

    const spy = spyOn(store, 'dispatch');

    component.finishEdition()

    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenCalledWith(edit({ id: 0, texto: 'un test' }))
  }))


  
  

});