import { Component, signal } from '@angular/core';


import { ViewChildDemo } from './demos/viewchildelementref/view-child-demo';
import { ViewContentBasics } from './demos/01-view-content-basics/view-content-basics';
import { ContentParent } from './demos/contentqueries/content-parent/content-parent';
import { SignalViewDemoComponent }
  from './demos/signalviewqueries/signal-view-demo';
  import { SignalContentParentComponent }
  from './demos/05-signal-content-quiries/signal-content-parent/signal-content-parent'
  import { DynamicViewDemoComponent }
  from './demos/templatedynamicviews/dynamic-view-demo/dynamic-view-demo';

  import { ViewEncapsulationDemoComponent }
  from './demos/viewencapsulation/view-encapsulation-demo';

@Component({
  selector: 'app-root',
  imports: [
    ViewContentBasics,
    ViewChildDemo,
    ContentParent,
    SignalViewDemoComponent,
    SignalContentParentComponent,
    DynamicViewDemoComponent,
    ViewEncapsulationDemoComponent
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