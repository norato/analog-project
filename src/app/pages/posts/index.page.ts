import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../shared/posts';

@Component({
  selector: 'app-posts-template',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <ul>
      <li *ngFor="let post of posts">
        <a routerLink="/posts/{{ post.slug }}"> {{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class PostsPageComponent {
  posts = injectContentFiles<Post>((contentFile) =>
    contentFile.filename.includes('/content/posts')
  );
}
