/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WaypointListComponent } from './waypoint-list.component';

describe('Component: WaypointList', () => {
  it('should create an instance', () => {
    let component = new WaypointListComponent();
    expect(component).toBeTruthy();
  });
});
