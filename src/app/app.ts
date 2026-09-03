import { Component } from '@angular/core';

import {
  TraditionalHighlightDirective
} from './traditional-highlight';

import {
  ModernHighlightDirective
} from './modern-highlight';

@Component({
  selector: 'app-root',

  imports: [
    TraditionalHighlightDirective,
    ModernHighlightDirective
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}