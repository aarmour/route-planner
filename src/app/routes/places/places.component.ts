import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { RP_LIST_DIRECTIVES } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'rp-places',
  templateUrl: 'places.component.html',
  styleUrls: ['places.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    RP_LIST_DIRECTIVES
  ]
})
export class PlacesComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
