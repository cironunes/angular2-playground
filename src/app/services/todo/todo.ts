import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class TodosService {
  todos$: Observable<Array<any>>;
  private _todosObserver: any;
  private dataStore: {
    todos: Array<any>
  };

  constructor() {
    this.todos$ = new Observable(observer =>
      this._todosObserver = observer).share();
      
    this.dataStore = { todos: [] };
  }
  
  loadTodos() {
    setTimeout(() => {
      this.dataStore.todos = [
        {description: 'Go to the mall', done: false},
        {description: 'Study Angular', done: true}
      ];
      
      this._todosObserver.next(this.dataStore.todos);
    }, 2000);
  }

}
  