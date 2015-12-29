import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {TodosService} from './todo';


describe('Todo Service', () => {

  beforeEachProviders(() => [TodosService]);


  it('should ...', inject([TodosService], (service:TodosService) => {

  }));

});
