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

  // chart data setup
  confirmedChartDataArray = [];
  deadChartDataArray = [];
  recoveredChartDataArray = [];
  worldData: CountriesCount[];
  confirmedTitle = '';
  deadTitle = '';
  recoveredTitle = '';

  // angular-charts setup
  chart = {
    PieChart: 'PieChart',
    height: 250,
    options: {
      animation: {
        duration: 500,
        easing: 'out',
      },
      is3D: true,
    },
  };

  constructor(
    private dataService: CovidDataService,
    private locationService: LocationService,
    private storageService: StorageService
  ) {}

  getChartData() {
    console.log('started getChartData function');
    this.confirmedChartDataArray = [];
    this.deadChartDataArray = [];
    this.recoveredChartDataArray = [];
    this.worldData.forEach((cases) => {
      let country: string;
      let confirmedValue: number;
      let deadValue: number;
      let recoveredValue: number;
      const confirmedThreshold = 300000;
      const deadThreshold = 30000;
      const recoveredThreshold = 300000;

      country = cases.country;
      this.confirmedTitle = `Countries with >${confirmedThreshold} confirmed cases`;
      this.deadTitle = `Countries with >${deadThreshold} deaths`;
      this.recoveredTitle = `Countries with >${recoveredThreshold} recovered`;

      if (cases.totalConfirmed > confirmedThreshold) {
        confirmedValue = cases.totalConfirmed;
      }
      if (cases.totalDeaths > deadThreshold) {
        deadValue = cases.totalDeaths;
      }
      if (cases.totalRecovered > recoveredThreshold) {
        recoveredValue = cases.totalRecovered;
      }

      if (country && confirmedValue && deadValue && recoveredValue) {
        this.confirmedChartDataArray.push([country, confirmedValue]);
        this.deadChartDataArray.push([country, deadValue]);
        this.recoveredChartDataArray.push([country, recoveredValue]);
        // this.storageService.set('confirmedChartDataArray', this.confirmedChartDataArray);
        // this.storageService.set('deadChartDataArray', this.deadChartDataArray);
        // this.storageService.set('recoveredChartDataArray', this.recoveredChartDataArray);
      }
    });
  }

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: Location) => {
      this.storageService.set('storedUserCountryData', data);
    });
    this.getGlobalCovidData();
    this.getUserCountryCovidData();

    this.dataService.getCountriesArrayData().subscribe({
      next: (result) => {
        this.storageService.set('storedCountriesArrayData', result);
        this.worldData = this.storageService.get('storedCountriesArrayData');
        // console.log('worldData: ', this.worldData);
        this.getChartData();
      },
    });
  }

  getGlobalCovidData(): void {
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

  getUserCountryCovidData(): void {
    this.dataService
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
