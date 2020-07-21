import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  @Input('totalConfirmed')
  totalConfirmed: number;
  @Input('totalRecovered')
  totalRecovered: number;
  @Input('totalDeaths')
  totalDeaths: number;
  @Input('date')
  date: string;

  constructor() {}

  ngOnInit(): void {}
}
