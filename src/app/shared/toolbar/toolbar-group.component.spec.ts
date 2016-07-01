/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ToolbarGroupComponent } from './toolbar-group.component';

describe('Component: ToolbarGroup', () => {
  it('should create an instance', () => {
    let component = new ToolbarGroupComponent();
    expect(component).toBeTruthy();
  });
});
