import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { CovidDataService } from '../../../services/covid-data.service';
import { GlobalCount, NewsItems, NewsItem } from '../../../models/covid';

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
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCovidNews();
  }

  getCovidNews(): void {
    this.covidDataService.getCovidNews().subscribe((data: NewsItems) => {
      this.newsTotalItems = data.total;
      this.newsItems = data.items;
      console.log('news data: ', data);
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
