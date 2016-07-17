/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { SandboxComponent } from './sandbox.component';

describe('Component: Sandbox', () => {
  it('should create an instance', () => {
    let component = new SandboxComponent();
    expect(component).toBeTruthy();
  });
});
