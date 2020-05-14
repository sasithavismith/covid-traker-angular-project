import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSetmycolor]'
})
export class SetmycolorDirective {

  constructor(private element:ElementRef) {
    //element.nativeElement.style.color='red';
   }
@HostListener('mouseenter') setcoloronMouseEnter(){
  this.element.nativeElement.style.color='red';
}
@HostListener('mouseleave') setcoloronMouseLeave(){
  this.element.nativeElement.style.color='black';
}
}
