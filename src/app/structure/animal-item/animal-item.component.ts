import { Component, OnInit, Input } from '@angular/core';

import { Animal } from '../animal';

@Component({
  selector: 'pb-animal-item',
  templateUrl: './animal-item.component.html'

})
export class AnimalItemComponent implements OnInit {
  @Input() animal: Animal;
  animalId: number;

  constructor() { }

  ngOnInit() {
  }

}
