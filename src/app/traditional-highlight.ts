import {
  Directive,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appTraditionalHighlight]'
})
export class TraditionalHighlightDirective {

  @HostBinding('style.backgroundColor')
  backgroundColor = 'lightblue';

  @HostBinding('style.color')
  textColor = 'black';

  @HostBinding('class.active')
  isActive = false;


  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'blue';
    this.textColor = 'white';
  }


  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'lightblue';
    this.textColor = 'black';
  }


  @HostListener('click')
  onClick() {
    this.isActive = !this.isActive;

    console.log(
      'Traditional Directive Clicked'
    );
  }

}