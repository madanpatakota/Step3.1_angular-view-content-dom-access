import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-content-child',
  imports: [],
  templateUrl: './content-child.html',
  styleUrl: './content-child.css',
})
export class ContentChildComponent {
  @ContentChild('employee')
  employee!: ElementRef<HTMLElement>;

  @ContentChildren('employee')
  employees!: QueryList<ElementRef<HTMLElement>>;

  firstEmployeeName = '';
  employeeList: string[] = [];

  showEmployee() {
    this.firstEmployeeName =
      this.employee.nativeElement.textContent?.trim() ?? '';

    this.employeeList = [];
  }

  showEmployees() {
    this.employeeList = this.employees
      .map((employee) => employee.nativeElement.textContent?.trim() ?? '')
      .filter((name) => name !== '');

    this.firstEmployeeName = '';
  }
}