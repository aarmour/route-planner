import { Component, OnInit } from '@angular/core';

import { RP_LIST_DIRECTIVES } from '../shared';
import { RP_WAYPOINT_LIST_DIRECTIVES } from '../routes/shared';

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
  private waypoints: Object[] = [{}, {}, {}];

  constructor() {}

  ngOnInit() {}

}
