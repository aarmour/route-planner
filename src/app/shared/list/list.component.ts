import { Component, Type } from '@angular/core';

import { RP_LIST_ITEM_DIRECTIVES } from './list-item.component';

@Component({
  moduleId: module.id,
  selector: 'rp-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent {}

export const RP_LIST_DIRECTIVES: Type[] = [
  ListComponent,
  ...RP_LIST_ITEM_DIRECTIVES
];
