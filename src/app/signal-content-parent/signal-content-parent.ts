import { Component } from '@angular/core';
import { SignalContentChildComponent } from '../signal-content-child/signal-content-child';

@Component({
  selector: 'app-signal-content-parent',
  imports: [SignalContentChildComponent],
  templateUrl: './signal-content-parent.html',
  styleUrl: './signal-content-parent.css'
})
export class SignalContentParentComponent {

}