import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

import {Todo} from '../../interfaces/todo';

@Injectable()
export class TodosService {
  todos$: Observable<Array<Todo>>;
  suggestions$: Observable<Array<Todo>>;
  private _todosObserver: any;
  private _suggestionsObserver: any;
  private dataStore: {
    todos: Array<Todo>,
    suggestions: Array<Todo>
  };

  constructor() {
    this.todos$ = new Observable(observer =>
      this._todosObserver = observer).share();

    this.suggestions$ = new Observable(observer =>
      this._suggestionsObserver = observer).share();
      
    this.dataStore = { todos: [], suggestions: [] };
  }
  
  loadTodos() {
    setTimeout(() => {
      this.dataStore.todos = [
        new Todo('Go to the mall', false),
        new Todo('Learn Angular', true)
      ];
      
      this._todosObserver.next(this.dataStore.todos);
    }, 2000);
  }
  
  addTodo(todo) {
    this.dataStore.todos.push(todo);
    this._todosObserver.next(this.dataStore.todos);
  }

  getSuggestions(searchText) {
    let pattern = new RegExp('^' + searchText);
    
    if (searchText === '') {
      this.dataStore.suggestions = [];
    } else {
      this.dataStore.suggestions = this.dataStore.todos.filter((todo) => {
        return pattern.test(todo.description.toLowerCase())
      });
    }
    
    this._suggestionsObserver.next(this.dataStore.suggestions);
    return this._todosObserver;
  }
}
  