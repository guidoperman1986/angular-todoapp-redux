import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TodoPageComponent } from './todos/todo-page/todo-page.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { FooterComponent } from './footer/footer.component';
import { TodoAddComponent } from './todos/todo-add/todo-add.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';
import { TodoFooterComponent } from './todos/todo-footer/todo-footer.component';
import { FiltroPipe } from './todos/filtro.pipe';
import { ReactiveFormsModule } from '@angular/forms';



describe('AppComponent', () => {
  let store: MockStore;
  const initialState = {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        TodoPageComponent,
        FooterComponent,
        TodoAddComponent,
        TodoListComponent,
        TodoFooterComponent,
        FiltroPipe
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'todo-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('todo-app');
  });
});
