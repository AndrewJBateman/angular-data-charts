import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  todaysDate = new Date();

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  isHomeRoute() {
    return this.router.url === '/home';
  }

  isCountriesRoute() {
    return this.router.url === '/covid-countries';
  }

  isNewsRoute() {
    return this.router.url === '/covid-news';
  }

  isNewsDetailRoute() {
    return this.router.url === '/news-detail';
  }

  isChartsRoute() {
    return this.router.url === '/charts';
  }

  isAboutRoute() {
    return this.router.url === '/about';
  }

  isContactRoute() {
    return this.router.url === '/contact';
  }

  returnToList() {
    this.location.back();
  }
}
