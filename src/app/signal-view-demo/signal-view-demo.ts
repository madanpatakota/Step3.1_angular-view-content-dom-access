import {
  Component,
  ElementRef,
  viewChild,
  viewChildren
} from '@angular/core';

@Component({
  selector: 'app-signal-view-demo',
  imports: [],
  templateUrl: './signal-view-demo.html',
  styleUrl: './signal-view-demo.css'
})
export class SignalViewDemoComponent {

  // Example 1
  employeeName = viewChild<ElementRef>('employeeName');

  // Example 2
  employeeEmail =
    viewChild.required<ElementRef>('employeeEmail');

  // Example 3
  employees =
    viewChildren<ElementRef>('employee');


  showEmployee() {
    console.log(
      this.employeeName()?.nativeElement.value
    );
  }


  showEmail() {
    console.log(
      this.employeeEmail().nativeElement.value
    );
  }


  showEmployees() {

    this.employees().forEach(employee => {
      console.log(employee.nativeElement.value);
    });

  }

}