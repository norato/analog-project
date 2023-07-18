import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <div class="container m-auto">
      <app-header />
      <div class="flex justify-center mt-6">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {}
