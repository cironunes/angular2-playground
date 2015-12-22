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
import {HttpSampleCmp} from './http-sample';


describe('HttpSample Component', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb
      .overrideTemplate(HttpSampleCmp, 'x')
      .createAsync(HttpSampleCmp).then((fixture) => {
        fixture.detectChanges();
      });
  }));

});
