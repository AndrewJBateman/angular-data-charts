import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  // global data inputs
  @Input('worldTotalConfirmed')
  worldTotalConfirmed: number;
  @Input('worldTotalDeaths')
  worldTotalDeaths: number;
  @Input('worldTotalRecovered')
  worldTotalRecovered: number;
  @Input('worldTotalConfirmedPerMillion')
  worldTotalConfirmedPerMillion: number;
  @Input('dataCreatedDate')
  date: string;

  // user country data inputs
  @Input('userCountry')
  userCountry: string;
  @Input('userCountryTotalConfirmed')
  userCountryTotalConfirmed: number;
  @Input('userCountryTotalDeaths')
  userCountryTotalDeaths: number;
  @Input('userCountryTotalRecovered')
  userCountryTotalRecovered: number;
  @Input('userCountryTotalConfirmedPerMillion')
  userCountryConfirmedPerMillion: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectCountryList() {
    this.router.navigate(["/covid-countries"]);
  }
}
