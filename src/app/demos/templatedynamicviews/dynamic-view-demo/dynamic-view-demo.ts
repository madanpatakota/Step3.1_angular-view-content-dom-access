import {
  Component,
  TemplateRef,
  ViewContainerRef,
  viewChild
} from '@angular/core';

import { NotificationComponent }
  from '../notification/notification';

@Component({
  selector: 'app-dynamic-view-demo',
  imports: [],
  templateUrl: './dynamic-view-demo.html'
})
export class DynamicViewDemoComponent {

  numbers = [1, 2, 3, 4];

  // Template references

  welcomeTemplate =
    viewChild.required<TemplateRef<unknown>>(
      'welcomeTemplate'
    );

  loginTemplate =
    viewChild.required<TemplateRef<unknown>>(
      'loginTemplate'
    );

  employeeFormTemplate =
    viewChild.required<TemplateRef<unknown>>(
      'employeeFormTemplate'
    );


  // Location where templates will be rendered

  templateContainer =
    viewChild.required(
      'templateContainer',
      {
        read: ViewContainerRef
      }
    );


  // Location where component will be rendered

  componentContainer =
    viewChild.required(
      'componentContainer',
      {
        read: ViewContainerRef
      }
    );


  showWelcomeTemplate() {

    this.templateContainer().clear();

    this.templateContainer()
      .createEmbeddedView(
        this.welcomeTemplate()
      );

  }


  showLoginTemplate() {

    this.templateContainer().clear();

    this.templateContainer()
      .createEmbeddedView(
        this.loginTemplate()
      );

  }


  showEmployeeFormTemplate() {

    this.templateContainer().clear();

    this.templateContainer()
      .createEmbeddedView(
        this.employeeFormTemplate()
      );

  }


  clearTemplate() {

    this.templateContainer().clear();

  }


  loadNotification() {

    this.componentContainer().clear();

    this.componentContainer()
      .createComponent(NotificationComponent);

  }


  removeNotification() {

    this.componentContainer().clear();

  }

}