import { Directive } from '@angular/core';

@Directive({
  selector: '[appModernHighlight]',

  host: {
    '[style.backgroundColor]': 'backgroundColor',
    '[style.color]': 'textColor',
    '[class.active]': 'isActive',

    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)': 'onClick()'
  }
})
export class ModernHighlightDirective {

  backgroundColor = 'lightgreen';

  textColor = 'black';

  isActive = false;


  onMouseEnter() {
    this.backgroundColor = 'green';
    this.textColor = 'white';
  }


  onMouseLeave() {
    this.backgroundColor = 'lightgreen';
    this.textColor = 'black';
  }


  onClick() {
    this.isActive = !this.isActive;

    console.log(
      'Modern Directive Clicked'
    );
  }

}