import {Component, Input, Output, EventEmitter} from 'angular2/core';


@Component({
  selector: 'io-sample',
  templateUrl: 'app/components/io/io.html',
  styleUrls: ['app/components/io/io.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class IOCmp {
  @Input() person;
  @Output() handleClick = new EventEmitter();

  constructor() {}

  greet() {
    this.handleClick.emit('greet');
  }

}