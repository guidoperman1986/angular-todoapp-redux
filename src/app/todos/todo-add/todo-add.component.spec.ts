import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { crear } from '../todos.action';
import { TodoAddComponent } from './todo-add.component';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;
  let store: MockStore;
  const initialState = [{id: 0, texto: 'Roberto', completado: false}]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        ReactiveFormsModule,
        TodoAddComponent
    ],
    providers: [
        provideMockStore({ initialState })
    ]
})
    .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //generate test for todo add
  it('should add a todo', fakeAsync (() => {
    const spy = spyOn(store, 'dispatch');
    component.txtInput = new FormControl('Robert')
    component.addTodo()    

    tick();

    expect(spy).toHaveBeenCalled()
    // expect(spy).toHaveBeenCalledWith(crear({texto: component.txtInput.value}))

  }));

  it('should not dispatch when an error comes up', ()=>{
    const spy = spyOn(store, 'dispatch');

    component.txtInput.setErrors({required: true});

    expect(spy).not.toHaveBeenCalled()
  })
  
});
