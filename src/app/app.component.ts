import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <nav class="my-3 navbar navbar-toggleable-md navbar-light bg-faded">
      <a class="navbar-brand" href="#">{{title}}</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/', 'forms', 'template']" routerLinkActive="active">
              Template Forms
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" [routerLink]="['/', 'forms', 'reactive']" routerLinkActive="active">
              Reactive Forms
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
})
export class AppComponent {
  title = 'Angular Form Exercise';
}
