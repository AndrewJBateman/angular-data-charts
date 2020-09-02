import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

import { NewsItem } from '../../../../models/covid';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css'],
})
export class NewsDetailComponent implements OnInit {
  newsItem: NewsItem;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private location: Location) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.newsItem = this.router.getCurrentNavigation().extras.state.item;
        // console.log('this.newsItem', this.newsItem);
      }
    });
  }

  ngOnInit(): void {}

  onReturnToList() {
    this.location.back();
  }
}
