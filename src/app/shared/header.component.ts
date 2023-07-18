import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgFor],
  template: `
    <header class="text-white">
      <div class="container mx-auto flex justify-between items-center py-6">
        <a href="/" class="flex items-center">
          <span class="font-semibold text-xl">Home</span>
        </a>
        <ul class="flex space-x-6">
          <li *ngFor="let link of links">
            <a [routerLink]="link.route" class="text-neutral-200">
              {{ link.title }}
            </a>
          </li>
        </ul>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  links = [
    {
      route: '/about',
      title: 'About',
    },
    {
      route: '/blog/any-page',
      title: 'Use slug param',
    },
    {
      route: '/parent',
      title: 'Nested page',
    },
    {
      route: '/the-error-page',
      title: 'Error page',
    },
    {
      route: '/drops',
      title: 'Markdown Page',
    },
    {
      route: '/posts',
      title: 'Posts from Markdown',
    },
    {
      route: '/other',
      title: 'Other directory',
    },
  ];
}
