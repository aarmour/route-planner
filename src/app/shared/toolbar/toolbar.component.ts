import {
  Component,
  OnInit,
  Type
} from '@angular/core';

import { RP_TOOLBAR_GROUP_DIRECTIVES } from './toolbar-group.component';

@Component({
  moduleId: module.id,
  selector: 'rp-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

export const RP_TOOLBAR_DIRECTIVES: Type[] = [
  ToolbarComponent,
  ...RP_TOOLBAR_GROUP_DIRECTIVES
];
