import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { CountriesCount } from '../../../models/covid';
import { StorageService } from '../../../services/localstorage.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  // radio button chart data class setup
  caseClasses: string[] = ['Confirmed', 'Recovered', 'Dead'];
  caseClass: string;
  selectedClass = 'Confirmed';

  // chart data setup
  chartDataArray = [];
  worldData: CountriesCount[];
  columnChartTitle = '';
  barChartTitle = '';
  columnNames = ['Country', 'Cases'];

  // angular-charts setup
  chart = {
    PieChart: 'PieChart',
    ColumnChart: 'ColumnChart',
    BarChart: 'BarChart',
    height: 400,
    width: 800,
    options: {
      animation: {
        duration: 500,
        easing: 'out',
      },
      is3D: true,
    },
  };

  countries: CountriesCount[];
  constructor(
    private dataService: CovidDataService,
    private storageService: StorageService
  ) {}

  getChartData(caseClass: string) {
    this.chartDataArray = [];
    this.worldData.forEach((cases) => {
      let country: string;
      let value: number;
      const confirmedThreshold = 500000;
      const recoveredThreshold = 400000;
      const deadThreshold = 30000;
      const thresholdNumberToString = (number: number) => {
        return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
      };
      const confirmedThresholdString = thresholdNumberToString(
        confirmedThreshold
      );
      const recoveredThresholdString = thresholdNumberToString(
        recoveredThreshold
      );
      const deadThresholdString = thresholdNumberToString(deadThreshold);

      // Switch case to change between user-selected case class
      switch (caseClass) {
        case 'Confirmed':
          if (cases.totalConfirmed > confirmedThreshold) {
            country = cases.country;
            value = cases.totalConfirmed;
          }
          this.columnChartTitle = `${this.chart.ColumnChart} of countries with > ${confirmedThresholdString} ${caseClass} cases`;
          this.barChartTitle = `${this.chart.BarChart} of countries with > ${confirmedThresholdString} ${caseClass} cases`;
          break;

        case 'Recovered':
          if (cases.totalRecovered > recoveredThreshold) {
            country = cases.country;
            value = cases.totalRecovered;
          }
          this.columnChartTitle = `${this.chart.ColumnChart} of countries with > ${recoveredThresholdString} ${caseClass}`;
          this.barChartTitle = `${this.chart.BarChart} of countries with > ${recoveredThresholdString} ${caseClass}`;
          break;

        case 'Dead':
          if (cases.totalDeaths > deadThreshold) {
            country = cases.country;
            value = cases.totalDeaths;
          }
          this.columnChartTitle = `${this.chart.ColumnChart} of countries with > ${deadThresholdString} ${caseClass}`;
          this.barChartTitle = `${this.chart.BarChart} of countries with > ${deadThresholdString} ${caseClass}`;
          break;
      }

      if (country && value) {
        this.chartDataArray.push([country, value]);
      }
    });
  }

  ngOnInit(): void {
    this.dataService.getCountriesArrayData().subscribe({
      next: (result) => {
        this.storageService.set('storedCountriesArrayData', result);
        this.worldData = this.storageService.get('storedCountriesArrayData');
        this.getChartData('Confirmed');
      },
    });
  }
}
