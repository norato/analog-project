import { injectContentFiles } from '@analogjs/content';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../shared/posts';

@Component({
  selector: 'app-other-template',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf],
  template: `
    <ul *ngIf="other !== undefined">
      <li *ngFor="let post of other">
        <a routerLink="/other/{{ post.slug }}"> {{ post.attributes.title }}</a>
      </li>
    </ul>
  `,
})
export default class OtherPageComponent {
  other = injectContentFiles<Post>((contentFile) =>
    contentFile.filename.includes('/content/other')
  );
}
