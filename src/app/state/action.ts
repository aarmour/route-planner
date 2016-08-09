import {
  AddWaypointAction,
  DeleteWaypointAction
} from './actions';

// This type, which is a union of all actions, represents everything
// that can be done in the app.
export type Action =
  AddWaypointAction |
  DeleteWaypointAction
  ;
