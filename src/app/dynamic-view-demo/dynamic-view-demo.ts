import {
  Component,
  TemplateRef,
  ViewContainerRef,
  viewChild,
} from '@angular/core';

import { NotificationComponent } from '../notification/notification';

@Component({
  selector: 'app-dynamic-view-demo',
  imports: [],
  templateUrl: './dynamic-view-demo.html',
  styleUrl: './dynamic-view-demo.css',
})
export class DynamicViewDemoComponent {
  numbers = [1, 2, 3, 4];

  // ng-template references
  welcomeTemplate =
    viewChild.required<TemplateRef<unknown>>('welcomeTemplate');

  loginTemplate =
    viewChild.required<TemplateRef<unknown>>('loginTemplate');

  employeeFormTemplate =
    viewChild.required<TemplateRef<unknown>>('employeeFormTemplate');

  // Place where templates will render
  templateContainer = viewChild.required('templateContainer', {
    read: ViewContainerRef,
  });

  // Place where dynamic component will render
  componentContainer = viewChild.required('componentContainer', {
    read: ViewContainerRef,
  });

  showWelcomeTemplate() {
    this.templateContainer().clear();
    this.templateContainer().createEmbeddedView(this.welcomeTemplate());
  }

  showLoginTemplate() {
    this.templateContainer().clear();
    this.templateContainer().createEmbeddedView(this.loginTemplate());
  }

  showEmployeeFormTemplate() {
    this.templateContainer().clear();
    this.templateContainer().createEmbeddedView(
      this.employeeFormTemplate()
    );
  }

  clearTemplate() {
    this.templateContainer().clear();
  }

  loadNotification() {
    this.componentContainer().clear();
    this.componentContainer().createComponent(NotificationComponent);
  }

  removeNotification() {
    this.componentContainer().clear();
  }
}