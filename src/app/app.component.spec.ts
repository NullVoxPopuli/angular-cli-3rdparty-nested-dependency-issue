/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Interceptor } from 'xhrinterceptor';

beforeEachProviders(() => [AppComponent]);

describe('App: AngularCli3rdpartyNestedDependencyIssue', () => {
  let interceptor;

  beforeEach(() => {
    interceptor = new Interceptor;
  });

  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'app works!\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('app works!');
  }));
});
