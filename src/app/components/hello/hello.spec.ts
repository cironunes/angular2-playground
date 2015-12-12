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
import {HelloCmp} from './hello';


describe('Hello Component', () => {

  beforeEachProviders(() => []);


  it('should have a default `person`', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    tcb
      .overrideTemplate(HelloCmp, '<h1>Hello {{person}}!</h1>') // TODO: remove this line once angular/angular issue: #5662 is fixed 
      .createAsync(HelloCmp)
      .then((fixture) => {
        fixture.detectChanges();
        expect(fixture.nativeElement.textContent).toBe('Hello World!');
      });
  }));

});
