import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFooterComponent } from './todo-footer.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;
  let store: MockStore;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFooterComponent ],
      providers: [
        provideMockStore({initialState})
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
