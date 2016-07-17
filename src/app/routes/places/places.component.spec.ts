/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { PlacesComponent } from './places.component';

describe('Component: Places', () => {
  it('should create an instance', () => {
    let component = new PlacesComponent();
    expect(component).toBeTruthy();
  });
});
