import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
  canActivate: [() => true],
};

@Component({
  selector: 'app-parent-children',
  standalone: true,
  template: ` <h2>Page Children</h2> `,
})
export default class ParentChildrenPageComponent {}
