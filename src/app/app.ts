import { Component, signal } from '@angular/core';
import { ContentParent } from './content-parent/content-parent';
@Component({
  imports: [ContentParent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  
}
