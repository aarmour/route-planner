import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { RP_STATE_PROVIDERS } from './state';

@Component({
  moduleId: module.id,
  selector: 'rp-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [RP_STATE_PROVIDERS],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
