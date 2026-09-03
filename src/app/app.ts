import { Component } from '@angular/core';
import { EncapsulationAComponent } from './encapsulation-a/encapsulation-a';
import { EncapsulationBComponent } from './encapsulation-b/encapsulation-b';


@Component({
  selector: 'app-root',
  imports: [
    EncapsulationAComponent,
    EncapsulationBComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}