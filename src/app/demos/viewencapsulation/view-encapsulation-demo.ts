import { Component } from '@angular/core';

import { EncapsulationAComponent }
  from './encapsulation-a/encapsulation-a';

import { EncapsulationBComponent }
  from './encapsulation-b/encapsulation-b';

@Component({
  selector: 'app-view-encapsulation-demo',
  imports: [
    EncapsulationAComponent,
    EncapsulationBComponent
  ],
  templateUrl: './view-encapsulation-demo.html'
})
export class ViewEncapsulationDemoComponent {

}