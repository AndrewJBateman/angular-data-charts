import { Injectable } from '@angular/core';

import { StorageService } from '../services/localstorage.service';
import { CountriesCount } from '../models/covid';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  // chart data setup
  chartDataArray = [];
  worldData: CountriesCount[];
  title = '';
  columnNames = ['Country', 'Cases'];

  constructor(private storageService: StorageService) { }

  getChartData(caseClass: string) {
    // console.log('started getChartData function with caseClass: ', caseClass);
    this.worldData = this.storageService.get('storedCountriesArrayData');
    this.chartDataArray = [];
    this.worldData.forEach((cases) => {
      let country: string;
      let value: number;
      const confirmedThreshold = 500000;
      const recoveredThreshold = 300000;
      const deadThreshold = 30000;

      // Switch case to change between user-selected case class
      switch (caseClass) {
        case 'Confirmed':
          if (cases.totalConfirmed > confirmedThreshold) {
            country = cases.country;
            value = cases.totalConfirmed;
          }
          this.title = `Countries having more than ${confirmedThreshold} ${caseClass} cases`;
          break;

        case 'Recovered':
          if (cases.totalRecovered > recoveredThreshold) {
            country = cases.country;
            value = cases.totalRecovered;
          }
          this.title = `Countries having more than ${recoveredThreshold} ${caseClass} cases`;
          break;

        case 'Dead':
          if (cases.totalDeaths > deadThreshold) {
            country = cases.country;
            value = cases.totalDeaths;
          }
          this.title = `Countries having more than ${deadThreshold} deaths`;
          break;
      }

      if (country && value) {
        this.chartDataArray.push([country, value]);
      }
    });
  }
}
