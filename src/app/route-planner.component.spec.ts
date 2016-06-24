import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RoutePlannerAppComponent } from '../app/route-planner.component';

beforeEachProviders(() => [RoutePlannerAppComponent]);

describe('App: RoutePlanner', () => {
  it('should create the app',
      inject([RoutePlannerAppComponent], (app: RoutePlannerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'route-planner works!\'',
      inject([RoutePlannerAppComponent], (app: RoutePlannerAppComponent) => {
    expect(app.title).toEqual('route-planner works!');
  }));
});
