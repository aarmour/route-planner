import { Record } from 'immutable';

export interface IWaypoint {
  latitude: number,
  longitude: number,
  title: string,
};

const WaypointRecord = Record({
  latitude: 0,
  longitude: 0,
  title: '',
});

export class Waypoint implements IWaypoint {

  private waypointRecord;

  constructor(values) {
    this.waypointRecord = new WaypointRecord(values);
  }

  get latitude() {
    return this.waypointRecord.latitude;
  }

  get longitude() {
    return this.waypointRecord.longitude;
  }

  get title() {
    return this.waypointRecord.title;
  }

}
