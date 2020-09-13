import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { StorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  todaysDate = new Date();
  totalNewsItems: number;

  constructor(
    private router: Router,
    private location: Location,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  isHomeRoute() {
    return this.router.url === '/home';
  }

  isCountriesRoute() {
    return this.router.url === '/covid-countries';
  }

  isNewsRoute() {
    this.totalNewsItems = this.storageService.get('newsArrayLength');
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
