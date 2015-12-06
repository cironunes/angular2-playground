import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {
  ROUTER_PROVIDERS,
  HashLocationStrategy,
  LocationStrategy
} from 'angular2/router';

import {Angular2PlaygroundApp} from './app/angular2-playground';


bootstrap(Angular2PlaygroundApp, [
  ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);
