import {
  Component,
  computed,
  contentChild,
  contentChildren,
  ElementRef,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-signal-content-child',
  imports: [],
  templateUrl: './signal-content-child.html'
})
export class SignalContentChildComponent {

  // Example 1: Optional signal content query
  employeeName =
    contentChild<ElementRef<HTMLElement>>('employeeName');

  // Example 2: Required signal content query
  employeeEmail =
    contentChild.required<ElementRef<HTMLElement>>('employeeEmail');

  // Example 3: Multiple projected elements
  employees =
    contentChildren<ElementRef<HTMLElement>>('employee');

  selectedEmployeeName = signal('');
  selectedEmployeeEmail = signal('');
  employeeList = signal<string[]>([]);

  employeeCount = computed(() => this.employees().length);

  showEmployee() {

    const name =
      this.employeeName()?.nativeElement.textContent?.trim() ?? '';

    this.selectedEmployeeName.set(name);
  }

  showEmail() {

    const email =
      this.employeeEmail().nativeElement.textContent?.trim() ?? '';

    this.selectedEmployeeEmail.set(email);
  }

  showEmployees() {

    const names = this.employees()
      .map(
        employee =>
          employee.nativeElement.textContent?.trim() ?? ''
      )
      .filter(name => name !== '');

    this.employeeList.set(names);
  }
}