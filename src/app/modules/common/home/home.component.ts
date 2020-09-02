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
  userCountry: '';
  userCountryCode: '';
  language = '';
  storedGlobalData: GlobalCount;
  userCountryData: CountriesCount;

  constructor(
    private covidDataService: CovidDataService,
    private locationService: LocationService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.locationService.getLocation().subscribe((data: Location) => {
      this.storageService.set('userCountryData', data);
    });
    this.getGlobalCovidData();
    this.getUserCountryCovidData();
  }

  getGlobalCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.storageService.set('storedGlobalData', data);
      this.storedGlobalData = this.storageService.get('globalData');
    });
  }

  getUserCountryCovidData(): void {
    this.covidDataService.getUserCountryData().subscribe((data: CountriesCount[]) => {
      this.userCountryData = data[0];
    });
  }
}
