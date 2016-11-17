import { Component, OnInit, Input } from '@angular/core';

import { Animal } from './animal';

@Component({
  selector: 'pb-animal-details',
  templateUrl: './animal-details.component.html',
  styles : [`
    .btn-success {
      background-color: #000000;
      color: #ffffff;
    }
    .btn-primary {
      background-color: #333333;
      color: #ffffff;
    }
    .btn-danger {
      background-color: #4d4d4d;
      color: #ffffff;
    }
  `]
  
})
export class AnimalDetailsComponent implements OnInit {
  @Input() selectedAnimal: Animal;

  constructor() { }

  ngOnInit() {
  }

}
