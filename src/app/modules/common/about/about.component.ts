import { Component } from '@angular/core';

import { PAGES } from './pages';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  pages = PAGES;

  constructor() {}
}
