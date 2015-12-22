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
import {NgUpgradeCmp} from './ng-upgrade';


describe('NgUpgrade Component', () => {

  beforeEachProviders(() => []);


  it('should ...', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb
      .overrideTemplate(NgUpgradeCmp, 'x')
      .createAsync(NgUpgradeCmp).then((fixture) => {
        fixture.detectChanges();
      });
  }));

});
