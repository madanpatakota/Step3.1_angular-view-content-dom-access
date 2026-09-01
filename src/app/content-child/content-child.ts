import {
  Component,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-content-child',
  imports: [],
  templateUrl: './content-child.html',
  styleUrl: './content-child.css'
})
export class ContentChildComponent {

  @ContentChild('employee')
  employee!: ElementRef;

  showEmployee() {
    console.log(this.employee.nativeElement.textContent);
  }

}