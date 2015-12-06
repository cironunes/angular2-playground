import {Component} from 'angular2/core';
import {
  RouteConfig,
  Route,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HelloCmp} from './components/hello/hello';
import {NgUpgradeCmp} from './components/ng-upgrade/ng-upgrade';


@Component({
  selector: 'angular2-playground-app',
  providers: [],
  templateUrl: 'app/angular2-playground.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  new Route({ path: '/', component: HelloCmp, name: 'HelloCmp' }),
  new Route({ path: '/ng-upgrade', component: NgUpgradeCmp, name: 'NgUpgradeCmp' })
])
export class Angular2PlaygroundApp {
}
