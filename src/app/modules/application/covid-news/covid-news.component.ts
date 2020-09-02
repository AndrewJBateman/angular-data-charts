import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { CovidDataService } from '../../../services/covid-data.service';
import { NewsItems, NewsItem } from '../../../models/covid';
import { StorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-covid-news',
  templateUrl: './covid-news.component.html',
  styleUrls: ['./covid-news.component.css'],
})
export class CovidNewsComponent implements OnInit {
  date = '';
  newsTotalItems = 0;
  newsItems: NewsItem[];

  constructor(
    private covidDataService: CovidDataService,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getCovidNews();
  }

  // subscribe to news API data observable
  getCovidNews(): void {
    this.covidDataService.getCovidNews().subscribe((data: NewsItems) => {
      this.storageService.set("totalNewsItems", data.total);
      this.storageService.set("storedNewsItems", data.items);
      this.newsItems = this.storageService.get("storedNewsItems");
    });
  }

  onGoToNewsDetail(item: NewsItem): void {
    const navigationExtras: NavigationExtras = {
      state: {
        item,
      },
    };
    this.router.navigate(['/news-detail'], navigationExtras);
  }
}
