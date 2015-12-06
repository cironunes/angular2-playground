import {Component} from 'angular2/core';


@Component({
  selector: 'angular2-playground-app',
  providers: [],
  templateUrl: 'app/angular2-playground.html',
  directives: [],
  pipes: []
})
export class Angular2PlaygroundApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
