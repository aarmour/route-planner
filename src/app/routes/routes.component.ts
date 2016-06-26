import { Component } from '@angular/core';

import { MapComponent, MB_MAP_DIRECTIVES } from '../mapbox';

@Component({
  moduleId: module.id,
  selector: 'rp-routes',
  templateUrl: 'routes.component.html',
  styleUrls: ['routes.component.css'],
  directives: [MB_MAP_DIRECTIVES]
})
export class RoutesComponent {

}
