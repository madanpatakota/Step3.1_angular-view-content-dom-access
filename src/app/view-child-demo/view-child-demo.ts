import { Component, ElementRef, ViewChild } from '@angular/core';

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
}
