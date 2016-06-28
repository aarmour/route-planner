import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Type
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'rp-menu-icon',
  templateUrl: 'menu-icon.component.html',
  styleUrls: ['menu-icon.component.css'],
  directives: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent implements OnInit {

  @Input() isExpanded: boolean = false;

  constructor() {}

  ngOnInit() {}

}

export const RP_MENU_ICON_DIRECTIVES: Type[] = [MenuIconComponent];
