import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList
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



  @ContentChildren('employee')
  employees!: QueryList<ElementRef>;

  showEmployees() {

    this.employees.forEach(employee => {
      console.log(employee.nativeElement.textContent);
    });

  }

}