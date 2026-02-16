import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,  // Ensure it's standalone
  imports: [RouterOutlet, RouterLink, RouterLinkActive],  // Import routing directives
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Angular Forms Demo</a>
        <div class="navbar-nav">
          <a class="nav-link" routerLink="/template-demo" routerLinkActive="active">Template-Driven Form</a>
          <a class="nav-link" routerLink="/reactive-demo" routerLinkActive="active">Reactive Form</a>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'Angular_Forms';
}
