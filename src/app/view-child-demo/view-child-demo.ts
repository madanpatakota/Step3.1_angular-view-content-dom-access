import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-view-child-demo',
  styleUrl: './view-child-demo.css',
  templateUrl: './view-child-demo.html',
})
export class ViewChildDemo {
  @ViewChild('employeeName')
  employeeName!: ElementRef;

  showEmployee() {
    console.log(this.employeeName.nativeElement.value);
  }

  @ViewChildren('employee')
  employees!: QueryList<ElementRef>;

  showEmployees() {
    this.employees.forEach(employee => {
      console.log(employee.nativeElement.value);
    });
  }

}


// @ViewChild     → Gets ONE matching element

// @ViewChildren  → Gets ALL matching elements
//                   ↓
//                QueryList
//                   ↓
//                forEach()