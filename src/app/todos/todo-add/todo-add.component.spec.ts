import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddComponent } from './todo-add.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';
import { ReactiveFormsModule } from '@angular/forms';

describe('TodoAddComponent', () => {
  let component: TodoAddComponent;
  let fixture: ComponentFixture<TodoAddComponent>;
  let store: MockStore;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ TodoAddComponent ],
      providers: [
        provideMockStore({initialState})
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
  
});
