import {
  Component,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-encapsulation-a',
  imports: [],
  templateUrl: './encapsulation-a.html',
  styleUrl: './encapsulation-a.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EncapsulationAComponent {

}