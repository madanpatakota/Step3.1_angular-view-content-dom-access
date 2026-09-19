import { Component, signal } from '@angular/core';


import { ViewChildDemo } from './demos/viewchildelementref/view-child-demo';
import { ViewContentBasics } from './demos/01-view-content-basics/view-content-basics';

@Component({
  selector: 'app-root',
  imports: [
    ViewContentBasics,
    ViewChildDemo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  selectedExample = signal('01');

  changeExample(event: Event) {

    const selectElement = event.target as HTMLSelectElement;

    this.selectedExample.set(selectElement.value);

  }

}