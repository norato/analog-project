import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from 'src/app/shared/posts';

@Component({
  selector: 'app-other-content',
  standalone: true,
  imports: [AsyncPipe, MarkdownComponent],
  template: `
    <h1>Blog other Post</h1>
    <analog-markdown [content]="(post$ | async)?.content" />
  `,
})
export default class PostContentPageComponent {
  post$ = injectContent<Post>({
    param: 'slug',
    subdirectory: 'other',
  });
}
