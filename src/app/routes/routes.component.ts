import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { MB_MAP_DIRECTIVES } from '../mapbox';
import {
  RP_MENU_ICON_DIRECTIVES,
  RP_OFF_CANVAS_LAYOUT_DIRECTIVES,
  RP_TOOLBAR_DIRECTIVES
} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rp-routes',
  templateUrl: 'routes.component.html',
  styleUrls: ['routes.component.css'],
  directives: [
    MB_MAP_DIRECTIVES,
    RP_MENU_ICON_DIRECTIVES,
    RP_OFF_CANVAS_LAYOUT_DIRECTIVES,
    RP_TOOLBAR_DIRECTIVES,
    ROUTER_DIRECTIVES
  ]
})
export class RoutesComponent {

  private isNavExpanded: boolean = true;

  private toggleNav() {
    this.isNavExpanded = !this.isNavExpanded;
  }
}
