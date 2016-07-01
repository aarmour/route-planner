import {
  Component,
  OnInit,
  Type
} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rp-toolbar-group',
  templateUrl: 'toolbar-group.component.html',
  styleUrls: ['toolbar-group.component.css']
})
export class ToolbarGroupComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

export const RP_TOOLBAR_GROUP_DIRECTIVES: Type[] = [ToolbarGroupComponent];
