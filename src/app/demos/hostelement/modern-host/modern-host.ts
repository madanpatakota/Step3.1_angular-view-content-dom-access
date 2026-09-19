import { Component } from '@angular/core';

@Component({
  selector: 'app-modern-host',
  imports: [],
  templateUrl: './modern-host.html',

  host: {

    '[style.backgroundColor]':
      'backgroundColor',

    '[style.display]':
      'display',

    '[style.padding]':
      'padding',

    '[style.borderRadius]':
      'borderRadius',

    '(mouseenter)':
      'onMouseEnter()',

    '(mouseleave)':
      'onMouseLeave()'

  }
})
export class ModernHostComponent {

  backgroundColor = 'lightyellow';

  display = 'block';

  padding = '20px';

  borderRadius = '8px';


  onMouseEnter() {
    this.backgroundColor = 'lightpink';
  }


  onMouseLeave() {
    this.backgroundColor = 'lightyellow';
  }

}