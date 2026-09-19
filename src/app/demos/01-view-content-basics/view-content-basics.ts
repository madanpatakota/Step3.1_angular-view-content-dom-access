import { Component } from '@angular/core';
import { Employee } from './employee/employee'

@Component({
  selector: 'app-view-content-basics',
  imports: [Employee],
  templateUrl: './view-content-basics.html'
})
export class ViewContentBasics {

}