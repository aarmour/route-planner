import { Inject, OpaqueToken } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

import { IWaypoint } from './models';

export interface AppState {
  waypoints: List<IWaypoint>
}

export function createState(initState: AppState, actions: Observable<any>): Observable<AppState> {
  // TODO
  const appStateObservable = actions.scan((state, action) => {
    return state;
  }, initState);

  return wrapIntoBehavior(initState, appStateObservable);
}

function wrapIntoBehavior(init, observable) {
  const result = new BehaviorSubject(init);
  observable.subscribe(s => result.next(s));
  return result;
}

const initState = new OpaqueToken("initState");
const dispatcher = new OpaqueToken("dispatcher");
const state = new OpaqueToken("state");

export const RP_STATE_PROVIDERS = [
  {
    provide: initState,
    useValue: {}
  },
  {
    provide: dispatcher,
    useValue: new Subject<any>(null)
  },
  {
    provide: state,
    useFactory: createState,
    deps: [new Inject(initState), new Inject(dispatcher)]
  }
];
