import {Component} from 'angular2/core';
import {
  RouteConfig,
  Route,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HelloCmp} from './components/hello/hello';
import {NgUpgradeCmp} from './components/ng-upgrade/ng-upgrade';
import {HttpSampleCmp} from './components/http-sample/http-sample';
import {IOCmp} from './components/io/io';
import {ObservablesCmp} from './components/observables/observables';
import {FormsCmp} from './components/forms/forms';


@Component({
  selector: 'angular2-playground-app',
  providers: [],
  templateUrl: 'app/angular2-playground.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', component: HelloCmp, name: 'HelloCmp' }),
  new Route({ path: '/ng-upgrade', component: NgUpgradeCmp, name: 'NgUpgradeCmp' }),
  new Route({ path: '/http-sample', component: HttpSampleCmp, name: 'HttpSampleCmp' }),
  new Route({ path: '/observables', component: ObservablesCmp, name: 'ObservablesCmp' }),
  new Route({ path: '/forms', component: FormsCmp, name: 'FormsCmp' })
])
export class Angular2PlaygroundApp {

}
