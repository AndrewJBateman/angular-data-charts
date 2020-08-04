import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { LocationService } from '../../../services/location.service';
import { GlobalCount, NewsItems, NewsItem } from '../../../models/covid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  lat = '';
  lng = '';
  country = '';
  callingCode = '';
  city = '';
  ip = 0;

  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalNewCases = 0;
  totalNewDeaths = 0;
  totalActiveCases = 0;
  totalCasesPerMillionPop = 0;
  date = '';
  newsTotalItems = 0;
  newsItems: NewsItem[];

  constructor(
    private covidDataService: CovidDataService,
    private locationService: LocationService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: any) => {
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.country = data.country_name;
      this.callingCode = data.country_calling_code;
      this.city = data.city;
      this.ip = data.ip;
      console.log('location data:', data);
    });
    this.getCovidData();
    this.getCovidNews();
  }

  getCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.totalConfirmed = data.totalConfirmed;
      this.totalDeaths = data.totalDeaths;
      this.totalRecovered = data.totalRecovered;
      this.totalNewCases = data.totalNewCases;
      this.totalNewDeaths = data.totalNewDeaths;
      this.totalActiveCases = data.totalActiveCases;
      this.totalCasesPerMillionPop = data.totalCasesPerMillionPop;
      this.date = data.created;
    });
  }

  getCovidNews(): void {
    this.covidDataService.getCovidNews().subscribe((data: NewsItems) => {
      this.newsTotalItems = data.total;
      this.newsItems = data.items;
      console.log('news data: ', data);
    });
  }
}
