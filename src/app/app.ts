import { Component, signal } from '@angular/core';
import { ViewChildDemo } from './view-child-demo/view-child-demo';

@Component({
  imports: [ViewChildDemo],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Step3.1_angular-view-content-dom-access');
}
