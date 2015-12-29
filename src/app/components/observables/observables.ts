import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, AsyncPipe} from 'angular2/common';

import {TodosService} from '../../services/todo/todo';

@Component({
  selector: 'observables',
  templateUrl: 'app/components/observables/observables.html',
  styleUrls: ['app/components/observables/observables.css'],
  providers: [TodosService],
  directives: [CORE_DIRECTIVES],
  pipes: [AsyncPipe]
})
export class ObservablesCmp {
  todos: Array<any>;

  constructor(private _todosService: TodosService) {
    this._todosService.todos$.subscribe(updatedTodos => {
      this.todos = updatedTodos;
    });
    this._todosService.loadTodos();
  }

}
