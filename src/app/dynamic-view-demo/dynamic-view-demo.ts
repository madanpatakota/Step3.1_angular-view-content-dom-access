import {
  Component,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  viewChild
} from '@angular/core';

import { NotificationComponent } from '../notification/notification';

@Component({
  selector: 'app-dynamic-view-demo',
  imports: [],
  templateUrl: './dynamic-view-demo.html',
  styleUrl: './dynamic-view-demo.css'
})
export class DynamicViewDemoComponent {
  
  /*differecen between Div and ngContainer*/
  numbers = [1, 2, 3, 4];



  // Example 1
  employeeTemplate =
    viewChild.required<TemplateRef<any>>('employeeTemplate');


  // Example 2
  templateContainer =
    viewChild.required('templateContainer', {
      read: ViewContainerRef
    });


  // Example 4
  componentContainer =
    viewChild.required('componentContainer', {
      read: ViewContainerRef
    });


  showTemplate() {

    console.log(this.employeeTemplate());

  }


  renderTemplate() {

    this.templateContainer().clear();

    this.templateContainer().createEmbeddedView(
      this.employeeTemplate()
    );

  }


  clearTemplate() {

    this.templateContainer().clear();

  }


  loadNotification() {

    this.componentContainer().clear();

    this.componentContainer().createComponent(
      NotificationComponent
    );

  }


  removeNotification() {

    this.componentContainer().clear();

  }

}