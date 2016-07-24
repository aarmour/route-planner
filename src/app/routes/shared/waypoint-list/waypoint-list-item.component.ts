import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Type
} from '@angular/core';

import { IWaypoint } from '../waypoint';

@Component({
  moduleId: module.id,
  selector: 'rp-waypoint-list-item',
  templateUrl: 'waypoint-list-item.component.html',
  styleUrls: ['waypoint-list-item.component.css']
})
export class WaypointListItemComponent implements OnInit {

  @Input() waypoint: IWaypoint;
  @Output() update: EventEmitter<IWaypoint> = new EventEmitter<IWaypoint>();
  @Output() delete: EventEmitter<IWaypoint> = new EventEmitter<IWaypoint>();

  private inputValue: string = '';

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.inputValue = changes.waypoint.currentValue.title;
  }

  onDelete() {
    this.delete.emit(this.waypoint);
  }

  onInputValueChange(value) {
    this.inputValue = value;
    this.update.emit(value);
  }

}

export const RP_WAYPOINT_LIST_ITEM_DIRECTIVES: Type[] = [WaypointListItemComponent];
