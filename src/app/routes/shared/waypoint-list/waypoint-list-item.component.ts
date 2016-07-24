import { Component, OnInit, Type } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rp-waypoint-list-item',
  templateUrl: 'waypoint-list-item.component.html',
  styleUrls: ['waypoint-list-item.component.css']
})
export class WaypointListItemComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}

export const RP_WAYPOINT_LIST_ITEM_DIRECTIVES: Type[] =
  [WaypointListItemComponent];
