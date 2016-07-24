import { Component, OnInit } from '@angular/core';
import Immutable = require('immutable');

import { RP_LIST_DIRECTIVES } from '../shared';
import { IWaypoint, Waypoint, RP_WAYPOINT_LIST_DIRECTIVES } from '../routes/shared';

@Component({
  moduleId: module.id,
  selector: 'rp-sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['sandbox.component.css'],
  directives: [
    RP_LIST_DIRECTIVES,
    RP_WAYPOINT_LIST_DIRECTIVES
  ]
})
export class SandboxComponent implements OnInit {

  private listItems: string[] = ['Item 1', 'Item 2', 'Item 3'];
  private waypoints: Immutable.List<IWaypoint> = Immutable.List<IWaypoint>([
    new Waypoint({title: 'Foo'}),
    new Waypoint({title: 'Bar'}),
    new Waypoint({title: 'Baz'})
  ]);

  constructor() {}

  ngOnInit() {}

  addWaypoint() {
    this.waypoints = this.waypoints.push(new Waypoint({title: 'Qux'}));
  }

  onWaypointDelete(waypoint) {
    const waypoints = this.waypoints;
    this.waypoints = waypoints.delete(waypoints.indexOf(waypoint));
  }

}
