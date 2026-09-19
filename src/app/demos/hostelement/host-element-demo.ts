import { Component } from '@angular/core';

import { TraditionalHostComponent }
  from './traditional-host/traditional-host';

import { ModernHostComponent }
  from './modern-host/modern-host';

@Component({
  selector: 'app-host-element-demo',
  imports: [
    TraditionalHostComponent,
    ModernHostComponent
  ],
  templateUrl: './host-element-demo.html'
})
export class HostElementDemoComponent {

}