import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {Http, HTTP_PROVIDERS} from 'angular2/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'http-sample',
  templateUrl: 'app/components/http-sample/http-sample.html',
  providers: [HTTP_PROVIDERS],
  directives: [CORE_DIRECTIVES],
  pipes: []
})
export class HttpSampleCmp {
  suggestions: Array<{}>;

  constructor(private http: Http) {
    
  }
  
  ngOnInit() {
    this.http.get('http://api.github.com/users/cironunes/orgs')
      .map((res) => res.json())
      .subscribe((res) => this.suggestions = res);
  }

}
