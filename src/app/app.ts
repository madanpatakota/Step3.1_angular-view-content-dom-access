import { Component, signal } from '@angular/core';


import { ViewChildDemo } from './demos/viewchildelementref/view-child-demo';
import { ViewContentBasics } from './demos/01-view-content-basics/view-content-basics';
import { ContentParent } from './demos/contentqueries/content-parent/content-parent';
import { SignalViewDemoComponent }
  from './demos/signalviewqueries/signal-view-demo';

@Component({
  selector: 'app-root',
  imports: [
    ViewContentBasics,
    ViewChildDemo,
    ContentParent,
    SignalViewDemoComponent
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