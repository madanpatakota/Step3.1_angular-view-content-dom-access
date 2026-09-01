import { Component, signal } from '@angular/core';
import { SignalViewDemoComponent } from './signal-view-demo/signal-view-demo';
@Component({
  imports: [SignalViewDemoComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
