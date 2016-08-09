import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type
} from '@angular/core';
import Immutable = require('immutable');

import { IWaypoint } from '../../../state/models';
import { RP_WAYPOINT_LIST_ITEM_DIRECTIVES } from './waypoint-list-item.component';

@Component({
  moduleId: module.id,
  selector: 'rp-waypoint-list',
  templateUrl: 'waypoint-list.component.html',
  styleUrls: ['waypoint-list.component.css'],
  directives: [RP_WAYPOINT_LIST_ITEM_DIRECTIVES]
})
export class WaypointListComponent implements OnInit {

  @Input() waypoints: Immutable.List<IWaypoint> = Immutable.List<IWaypoint>();
  @Output() itemDelete: EventEmitter<IWaypoint> = new EventEmitter<IWaypoint>();
  @Output() itemUpdate: EventEmitter<IWaypoint> = new EventEmitter<IWaypoint>();

  constructor() {}

  ngOnInit() {}

  onItemDelete(waypoint) {
    this.itemDelete.emit(waypoint);
  }

  onItemUpdate(waypoint, title) {
    console.info('onItemUpdate:', waypoint, title);
    this.itemUpdate.emit(waypoint.set('title', title));
  }

}

export const RP_WAYPOINT_LIST_DIRECTIVES: Type[] = [
  WaypointListComponent,
  ...RP_WAYPOINT_LIST_ITEM_DIRECTIVES
];
