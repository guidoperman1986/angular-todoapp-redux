import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFooterComponent } from './todo-footer.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;
  let store: MockStore;
  let compiled: any;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFooterComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoFooterComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer element', () => {
    const footer = compiled.querySelector('footer');
    expect(footer).toBeTruthy();
  });

  it('should have a span element', () => {
    const span = compiled.querySelector('span');
    expect(span).toBeTruthy();
  });

  it('should show pending todos', () => {
    const span = compiled.querySelector('span');
    expect(span.textContent).toContain('0');
  });

  it('should clear completed todos', () => {
    const spyStore = spyOn(store, 'dispatch');
    const button = compiled.querySelector('button');
    button.click();

    expect(component.pending).toBe(0);
    expect(spyStore).toHaveBeenCalled();
  });



});
