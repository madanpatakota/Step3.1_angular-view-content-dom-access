import {
  Component,
  HostBinding,
  HostListener
} from '@angular/core';

@Component({
  selector: 'app-traditional-host',
  imports: [],
  templateUrl: './traditional-host.html'
})
export class TraditionalHostComponent {

  @HostBinding('style.backgroundColor')
  backgroundColor = 'lightblue';

  @HostBinding('style.display')
  display = 'block';

  @HostBinding('style.padding')
  padding = '20px';

  @HostBinding('style.borderRadius')
  borderRadius = '8px';


  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'lightgreen';
  }


  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'lightblue';
  }

}