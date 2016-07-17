import { Component, OnInit } from '@angular/core';

import { RP_LIST_DIRECTIVES } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'rp-sandbox',
  templateUrl: 'sandbox.component.html',
  styleUrls: ['sandbox.component.css'],
  directives: [RP_LIST_DIRECTIVES]
})
export class SandboxComponent implements OnInit {

  private listItems: string[] = ['Item 1', 'Item 2', 'Item 3'];

  constructor() {}

  ngOnInit() {}

}
