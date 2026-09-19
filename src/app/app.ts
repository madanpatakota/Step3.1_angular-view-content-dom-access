import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewContentBasics } from './demos/01-view-content-basics/view-content-basics';
//import { ViewContentBasics } from './demos/viewcontentbasics/view-content-basics';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ViewContentBasics
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