import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[pbDropdown]'
})
export class DropdownDirective {
  @HostListener('mouseover') open(){
      this.isOpen = true;
  }
  @HostListener('mouseleave') close(){
      this.isOpen = false;
  }
  @HostBinding('class.open') get opened(){
    return this.isOpen;
  }
  private isOpen = false;

  constructor() { }

}
