import {Component} from 'angular2/core';

import {IOCmp} from '../io/io';


@Component({
  selector: 'hello',
  templateUrl: 'app/components/hello/hello.html',
  styleUrls: ['app/components/hello/hello.css'],
  providers: [],
  directives: [IOCmp],
  pipes: []
})
export class HelloCmp {
  
  person: string = 'World';
  
  handleClick() {
    alert(`Hello ${this.person}`);
  }
}
