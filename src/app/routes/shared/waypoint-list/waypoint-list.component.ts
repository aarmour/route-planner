import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Type
} from '@angular/core';

import { RP_WAYPOINT_LIST_ITEM_DIRECTIVES } from './waypoint-list-item.component';

@Component({
  moduleId: module.id,
  selector: 'rp-waypoint-list',
  templateUrl: 'waypoint-list.component.html',
  styleUrls: ['waypoint-list.component.css']
})
export class WaypointListComponent implements OnChanges, OnInit {

  @Input() waypoints: Object[] = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    console.info('WaypointListComponent: ngOnChanges:', changes);
  }

}

export const RP_WAYPOINT_LIST_DIRECTIVES: Type[] = [
  WaypointListComponent,
  ...RP_WAYPOINT_LIST_ITEM_DIRECTIVES
];
