import { Component } from '@angular/core';
import { ContentChildComponent } from '../content-child/content-child';

@Component({
  selector: 'app-content-parent',
  imports: [ContentChildComponent],
  templateUrl: './content-parent.html',
})
export class ContentParent {

}