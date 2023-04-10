import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <span>App is running</span>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/articles">Articles</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learn-routing';
}
