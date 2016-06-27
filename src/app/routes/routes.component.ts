import { Component } from '@angular/core';

import { MB_MAP_DIRECTIVES } from '../mapbox';
import { RP_OFF_CANVAS_LAYOUT_DIRECTIVES } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rp-routes',
  templateUrl: 'routes.component.html',
  styleUrls: ['routes.component.css'],
  directives: [
    MB_MAP_DIRECTIVES,
    RP_OFF_CANVAS_LAYOUT_DIRECTIVES
  ]
})
export class RoutesComponent {

  private isNavExpanded: boolean = true;

  private onToggleNav() {
    this.isNavExpanded = !this.isNavExpanded;
  }
}
