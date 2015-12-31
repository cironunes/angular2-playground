import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, Control, AsyncPipe} from 'angular2/common';

import {TodosService} from '../../services/todo/todo';
import {Todo} from '../../interfaces/todo';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'observables',
  templateUrl: 'app/components/observables/observables.html',
  styleUrls: ['app/components/observables/observables.css'],
  providers: [TodosService],
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [AsyncPipe]
})
export class ObservablesCmp {
  todos: Array<Todo>;
  suggestions: Array<Todo>;
  todo: Control = new Control();

  constructor(private _todosService: TodosService) {
    this._todosService.todos$.subscribe((todos) => {
      this.todos = todos;
    });
    
    this._todosService.suggestions$.subscribe((suggestions) => {
      this.suggestions = suggestions;
    });
    
    this._todosService.loadTodos();
    
    this.todo.valueChanges
      .debounceTime(1000)
      .subscribe(val => {
        this._todosService.getSuggestions(val);
      });
  }

}
