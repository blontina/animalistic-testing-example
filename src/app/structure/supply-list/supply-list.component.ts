import { Component, OnInit } from '@angular/core';

import { Supplies } from '../../supplies';

@Component({
  selector: 'pb-supply-list',
  templateUrl: './supply-list.component.html'

})
export class SupplyListComponent implements OnInit {

  item: Supplies[] = [];

  constructor() { }

  ngOnInit() {
  }

}
