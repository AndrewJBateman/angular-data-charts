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
  globalData: GlobalCount;
  userCountryData: CountriesCount;
  worldTotalConfirmed: number;
  worldTotalRecovered: number;
  worldTotalDeaths: number;
  worldTotalConfirmedPerMillion: number;
  worldNewCases: number;
  worldNewDeaths: number;
  userCountryTotalConfirmed: number;
  userCountryTotalRecovered: number;
  userCountryTotalDeaths: number;
  userCountryTotalConfirmedPerMillion: number;
  userCountryNewCases: number;
  userCountryNewDeaths: number;
  dataCreatedDate: string;

  constructor(
    private covidDataService: CovidDataService,
    private locationService: LocationService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: Location) => {
      this.storageService.set('storedUserCountryData', data);
    });
    this.getGlobalCovidData();
    this.getUserCountryCovidData();
  }

  getGlobalCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.storageService.set('storedGlobalCovidData', data);
      this.globalData = this.storageService.get('storedGlobalCovidData');
      this.worldTotalConfirmed = this.globalData.totalConfirmed;
      this.worldTotalDeaths = this.globalData.totalDeaths;
      this.worldTotalRecovered = this.globalData.totalRecovered;
      this.worldTotalConfirmedPerMillion = this.globalData.totalCasesPerMillionPop;
      this.dataCreatedDate = this.globalData.created;
    });
  }

  getUserCountryCovidData(): void {
    this.covidDataService
      .getUserCountryData()
      .subscribe((data: CountriesCount[]) => {
        this.storageService.set('storedUserCountryCovidData', data[0]);
        this.userCountryData = this.storageService.get(
          'storedUserCountryCovidData'
        );
        this.userCountry = this.userCountryData.country;
        this.userCountryTotalConfirmed = this.userCountryData.totalConfirmed;
        this.userCountryTotalRecovered = this.userCountryData.totalRecovered;
        this.userCountryTotalDeaths = this.userCountryData.totalDeaths;
        this.userCountryTotalConfirmedPerMillion = this.userCountryData.totalConfirmedPerMillionPopulation;
      });
  }
}
