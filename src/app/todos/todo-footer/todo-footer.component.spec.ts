import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { TodoFooterComponent } from './todo-footer.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { initialState } from '../todos.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.action';

describe('TodoFooterComponent', () => {
  let component: TodoFooterComponent;
  let fixture: ComponentFixture<TodoFooterComponent>;
  let store: MockStore;
  let compiled: any;
  const initialState = {
    filter: 'all' as filtrosValidos,
    todos: [{ id: 0, texto: 'Test Todo', completado: false }, { id: 0, texto: 'Test Todo', completado: true }]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoFooterComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(TodoFooterComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
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
    expect(span.textContent).toContain('1');
  });

  it('should clear completed todos', () => {
    const spyStore = spyOn(store, 'dispatch');
    const button = compiled.querySelector('button');
    button.click();

    expect(component.pending).toBe(1);
    expect(spyStore).toHaveBeenCalled();
  });

  it('should show pending number of todos', () => {
    const span = compiled.querySelector('span');
    expect(span.textContent).toContain('1');
  });

  it('should show available filters', () => {
    const filters = compiled.querySelectorAll('li');
    expect(filters.length).toBe(3);
  });

  it('should show clear completed button', () => {
    const clearButton = compiled.querySelector('.clear-completed');
    expect(clearButton).toBeTruthy();
  })

  it('should clear all completed todos', () => {
    const spyStore = spyOn(store, 'dispatch');

    const clearButton = compiled.querySelector('.clear-completed');
    clearButton.click();
    expect(spyStore).toHaveBeenCalled();
  })

  it('should update pending count from store', () => {
    store.setState({
      filter: 'all' as filtrosValidos,
      todos: [
        { id: 0, texto: 'Test Todo 1', completado: false },
        { id: 1, texto: 'Test Todo 2', completado: true }
      ]
    });

    fixture.detectChanges();

    expect(component.pending).toBe(1);
  });

  it('should initially be set filter to all', () => {
    fixture.detectChanges();

    expect(component.actualFilter).toBe('all');

  });

  it('should change filter from all to pending', (done) => {
    const spyStore = spyOn(store, 'dispatch');
    component.setFilter('pending');
    
    fixture.detectChanges();

    store.setState({
      filter: 'pending' as filtrosValidos,
      todos: [
        { id: 0, texto: 'Test Todo 1', completado: false },
        { id: 1, texto: 'Test Todo 2', completado: true }
      ]
    });

    fixture.detectChanges();
    
    expect(spyStore).toHaveBeenCalled();
    expect(component.actualFilter).toBe('pending')
    done();
  })
});
