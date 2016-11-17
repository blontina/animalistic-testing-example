import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Animal } from './animal';

@Component({
  selector: 'pb-animal-list',
  templateUrl: './animal-list.component.html',
  styles : [`
      .btn-default {
        background-color: #000000;
        color:  #ffffff;
      }
  `]

})
export class AnimalListComponent implements OnInit {
  animals: Animal[] = [
    new Animal('Tiger', 'Tiger-Description', 'http://birminghammom.com/files/iStock_tiger_Small.jpg'),
    new Animal('Dog', 'Dog-Description', 'https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/dog-medium-landing-hero.ashx'),
    new Animal('Bunny', 'Bunny-Description', 'http://4.bp.blogspot.com/-HTvSYzA-pO4/UgQb4Zh_u0I/AAAAAAAAEuI/XwhtogT_1tA/s1600/3+cute2.jpg')
  ];
  

  @Output() animalSelected = new EventEmitter<Animal>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(animal: Animal){
    this.animalSelected.emit(animal);
  }

}
