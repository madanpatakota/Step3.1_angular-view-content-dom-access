import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-view-child-demo',
  imports: [],
  templateUrl: './view-child-demo.html',
  styleUrl: './view-child-demo.css'
})
export class ViewChildDemo {

  @ViewChild('employeeName')
  employeeName!: ElementRef<HTMLInputElement>;

  @ViewChildren('employee')
  employees!: QueryList<ElementRef<HTMLInputElement>>;

  employeeList: string[] = [];

  showEmployee() {
    console.log(this.employeeName.nativeElement.value);
  }

  showEmployees() {

    this.employeeList = [];

    this.employees.forEach((employee) => {

      const name = employee.nativeElement.value.trim();

      if (name) {
        this.employeeList.push(name);
      }

    });

  }

  ResetEmployees() {
    this.employeeList = [];
  }

}