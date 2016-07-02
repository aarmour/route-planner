import { Component, Type } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'rp-list-item',
  templateUrl: 'list-item.component.html',
  styleUrls: ['list-item.component.css']
})
export class ListItemComponent {}

export const RP_LIST_ITEM_DIRECTIVES: Type[] = [ListItemComponent];
