import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css'],
})
export class HomeCardComponent implements OnInit {
  @Input('worldTotalConfirmed')
  worldTotalConfirmed: number;
  @Input('worldTotalRecovered')
  worldTotalRecovered: number;
  @Input('worldTotalDeaths')
  worldTotalDeaths: number;
  @Input('dataCreatedDate')
  date: string;
  @Input('userCountry')
  userCountry: string;
  @Input('userCountryTotalConfirmed')
  userCountryTotalConfirmed: number;
  @Input('userCountryTotalDeaths')
  userCountryTotalDeaths: number;
  @Input('userCountryTotalRecovered')
  userCountryTotalRecovered: number;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectCountryList() {
    this.router.navigate(["/covid-countries"]);
  }
}
