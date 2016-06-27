import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'rp-off-canvas-layout',
  templateUrl: 'off-canvas-layout.component.html',
  styleUrls: ['off-canvas-layout.component.css'],
  directives: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffCanvasLayoutComponent implements OnInit {

  @Input() isExpanded: boolean = false;

  constructor() {}

  ngOnInit() {
  }

}

export const RP_OFF_CANVAS_LAYOUT_DIRECTIVES = [OffCanvasLayoutComponent];
