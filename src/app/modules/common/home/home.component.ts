import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { LocationService } from '../../../services/location.service';
import { StorageService } from '../../../services/localstorage.service';
import { GlobalCount, CountryCount } from '../../../models/covid';
import { Location } from '../../../models/location';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public userCountry: string;
  userCountryCode: '';
  language = '';
  globalData: GlobalCount;
  userCountryData: CountryCount;
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

  // chart data setup
  chartDataArray = [];
  worldData: CountryCount[];
  title = '';

  // angular-charts setup
  chart = {
    type: 'PieChart',
    // height: 300,
    options: {
      animation: {
        duration: 500,
        easing: 'out',
      },
      is3D: true,
    },
  };

  constructor(private dataService: CovidDataService, private locationService: LocationService, private storageService: StorageService) {}

  // function to push chart data into an array using a forEach loop
  // index of mat-tab-group used in switch case to choose class of data
  getChartData(tab: { index: number; tab?: string }) {
    let tabNumber = tab.index;
    this.chartDataArray = [];
    this.worldData.forEach(cases => {
      let country: string;
      let value: number;
      const confirmedThreshold = 6000000;
      const recoveredThreshold = 6000000;
      const deadThreshold =200000;

      // Switch case to change between user-selected case class
      switch (tabNumber) {
        case 0:
          if (cases.totalConfirmed > confirmedThreshold) {
            country = cases.country;
            value = cases.totalConfirmed;
          }
          this.title = `Countries with >${confirmedThreshold} confirmed cases`;
          break;

        case 1:
          if (cases.totalRecovered > recoveredThreshold) {
            country = cases.country;
            value = cases.totalRecovered;
          }
          this.title = `Countries with >${recoveredThreshold} recovered cases`;
          break;

        case 2:
          if (cases.totalDeaths > deadThreshold) {
            country = cases.country;
            value = cases.totalDeaths;
          }
          this.title = `Countries with >${deadThreshold} deaths`;
          break;
      }

      if (country && value) {
        this.chartDataArray.push([country, value]);
      }
    });
  }

  // on initialisation get user location, global & user country total covid figures
  // get covid data for all world countries using data service then
  // store this data in local storage the access it & run function to get chart data
  ngOnInit(): void {
    try {
      this.locationService.getLocation().subscribe((data: Location) => {
        this.userCountry = data.country_name;
        this.storageService.set('userCountry', this.userCountry);
      });
    } catch (error) {
    } finally {
      this.getUserCountryCovidData();
    }

    this.getGlobalCovidData();

    this.dataService.getCountriesArrayData().subscribe({
      next: result => {
        this.storageService.set('storedCountriesArrayData', result);
        this.worldData = this.storageService.get('storedCountriesArrayData');
        this.getChartData({ index: 0 });
      },
    });
  }

  getUserCountryCovidData(): void {
    this.dataService.getUserCountryData().subscribe((data: CountryCount[]) => {
      this.userCountryData = data[0];
      this.storageService.set('storedUserCountryCovidData', this.userCountryData);
      this.userCountryTotalConfirmed = this.userCountryData.totalConfirmed;
      this.userCountryTotalRecovered = this.userCountryData.totalRecovered;
      this.userCountryTotalDeaths = this.userCountryData.totalDeaths;
      this.userCountryTotalConfirmedPerMillion = this.userCountryData.totalConfirmedPerMillionPopulation;
    });
  }

  getGlobalCovidData(): any {
    this.dataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.storageService.set('storedGlobalCovidData', data);
      this.globalData = this.storageService.get('storedGlobalCovidData');
      this.worldTotalConfirmed = this.globalData.totalConfirmed;
      this.worldTotalDeaths = this.globalData.totalDeaths;
      this.worldTotalRecovered = this.globalData.totalRecovered;
      this.worldTotalConfirmedPerMillion = this.globalData.totalCasesPerMillionPop;
      this.dataCreatedDate = this.globalData.created;
    });
  }
}
