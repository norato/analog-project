import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  template: `
    <h1>Blog Post</h1>
    <h2>{{ slug }}</h2>
  `,
})
export default class BlogPostPageComponent {
  @Input() slug?: string;
}
