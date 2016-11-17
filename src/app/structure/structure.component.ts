import { Component, OnInit } from '@angular/core';

import { Animal } from './animal';

@Component({
  selector: 'pb-structure',
  templateUrl: './structure.component.html'
})
export class StructureComponent implements OnInit {
  selectedAnimal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
