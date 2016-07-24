/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { WaypointListItemComponent } from './waypoint-list-item.component';

describe('Component: WaypointListItem', () => {
  it('should create an instance', () => {
    let component = new WaypointListItemComponent();
    expect(component).toBeTruthy();
  });
});
