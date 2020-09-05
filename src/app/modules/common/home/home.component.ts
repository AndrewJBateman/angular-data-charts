import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { LocationService } from '../../../services/location.service';
import { StorageService } from '../../../services/localstorage.service';
import { GlobalCount, CountriesCount } from '../../../models/covid';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  userCountry: string;
  userCountryCode: '';
  language = '';
  storedGlobalData: GlobalCount;
  userCountryData: CountriesCount;
  worldTotalConfirmed: number;
  worldTotalRecovered: number;
  worldTotalDeaths: number;
  dataCreatedDate: string;
  userCountryTotalConfirmed: number;
  userCountryTotalDeaths: number;
  userCountryTotalRecovered: number;

  constructor(
    private covidDataService: CovidDataService,
    private locationService: LocationService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: Location) => {
      this.storageService.set('storedUserCountryData', data);
    });
    this.getGlobalCovidData();
    this.getUserCountryCovidData();
  }

  getGlobalCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.storageService.set('storedGlobalData', data);
      this.storedGlobalData = this.storageService.get('storedGlobalData');
      this.worldTotalConfirmed = this.storedGlobalData.totalConfirmed;
      this.worldTotalDeaths = this.storedGlobalData.totalDeaths;
      this.worldTotalRecovered = this.storedGlobalData.totalRecovered;
      this.dataCreatedDate = this.storedGlobalData.created;
    });
  }

  getUserCountryCovidData(): void {
    this.covidDataService
      .getUserCountryData()
      .subscribe((data: CountriesCount[]) => {
        this.userCountryData = data[0];
        this.userCountry = this.userCountryData.country;
        this.userCountryTotalConfirmed = this.userCountryData.totalConfirmed;
        this.userCountryTotalDeaths = this.userCountryData.totalDeaths;
        this.userCountryTotalRecovered = this.userCountryData.totalRecovered;
      });
  }
}
