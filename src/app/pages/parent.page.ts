import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent-template',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Parent Route</h1>
    <a [routerLink]="['/parent']"> Home</a>
    <a [routerLink]="['/parent/child']"> Child Route</a>
    <router-outlet />
  `,
})
export default class ParentPageComponent {}
