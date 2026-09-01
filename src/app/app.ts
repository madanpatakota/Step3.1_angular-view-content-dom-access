import { Component, signal } from '@angular/core';
import { SignalContentParentComponent } from './signal-content-parent/signal-content-parent';
@Component({
  imports: [SignalContentParentComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
