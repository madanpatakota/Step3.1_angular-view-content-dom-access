import {
  Component,
  ElementRef,
  contentChild,
  contentChildren
} from '@angular/core';

@Component({
  selector: 'app-signal-content-child',
  imports: [],
  templateUrl: './signal-content-child.html',
  styleUrl: './signal-content-child.css'
})
export class SignalContentChildComponent {

  // Example 1
  employeeName =
    contentChild<ElementRef>('employeeName');


  // Example 2
  employeeEmail =
    contentChild.required<ElementRef>('employeeEmail');


  // Example 3
  employees =
    contentChildren<ElementRef>('employee');


  showEmployee() {
    console.log(
      this.employeeName()?.nativeElement.textContent
    );
  }


  showEmail() {
    console.log(
      this.employeeEmail().nativeElement.textContent
    );
  }


  showEmployees() {

    this.employees().forEach(employee => {
      console.log(employee.nativeElement.textContent);
    });

  }

}