import {
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
  viewChildren,
} from '@angular/core';

@Component({
  selector: 'app-signal-view-demo',
  imports: [],
  templateUrl: './signal-view-demo.html',
  styleUrl: './signal-view-demo.css',
})
export class SignalViewDemoComponent {
  // Example 1: Optional signal query
  employeeName = viewChild<ElementRef<HTMLInputElement>>('employeeName');

  // Example 2: Required signal query
  employeeEmail =
    viewChild.required<ElementRef<HTMLInputElement>>('employeeEmail');

  // Example 3: Multiple elements as a signal
  employees = viewChildren<ElementRef<HTMLInputElement>>('employee');

  // Signals used to show result in the UI
  selectedEmployeeName = signal('');
  selectedEmployeeEmail = signal('');
  employeeList = signal<string[]>([]);

  // This value updates automatically when employee elements are added/removed
  employeeCount = computed(() => this.employees().length);

  showMoreEmployees = signal(false);

  showEmployee() {
    const name = this.employeeName()?.nativeElement.value.trim() ?? '';

    this.selectedEmployeeName.set(name);
  }

  showEmail() {
    const email = this.employeeEmail().nativeElement.value.trim();

    this.selectedEmployeeEmail.set(email);
  }

  showEmployees() {
    const employeeNames = this.employees()
      .map((employee) => employee.nativeElement.value.trim())
      .filter((name) => name !== '');

    this.employeeList.set(employeeNames);
  }

  addMoreEmployees() {
    this.showMoreEmployees.set(true);
  }
}