import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PetBookComponent } from './pet-book.component';
import { NavbarHeaderComponent } from './navbar-header.component';
import { StructureComponent } from './structure/structure.component';
import { AnimalListComponent } from './structure/animal-list.component';
import { AnimalDetailsComponent } from './structure/animal-details.component';
import { AnimalItemComponent } from './structure/animal-item/animal-item.component';
import { SupplyListComponent } from './structure/supply-list/supply-list.component';
import { SupplyListAddComponent } from './structure/supply-list/supply-list-add.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [
    PetBookComponent,
    NavbarHeaderComponent,
    StructureComponent,
    AnimalListComponent,
    AnimalDetailsComponent,
    AnimalItemComponent,
    SupplyListComponent,
    SupplyListAddComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [PetBookComponent]
})
export class PetBookModule { }
