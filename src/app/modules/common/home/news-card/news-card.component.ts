import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() content: string;
  @Input() imageUrl: string;
  @Input() itemUrl: string;
  @Input() date: Date;
  @Input() siteName: string;

  constructor() { }

  ngOnInit(): void {
  }

  onOpenInBrowser() {
  }

}
