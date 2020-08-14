import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

import { CovidDataService } from '../../../services/covid-data.service';
import { CountriesCount } from 'src/app/models/covid';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  testClass: string;
  caseClasses: string[] = ['Confirmed', 'Recovered', 'Dead'];
  caseClass: string;
  selectedClass: string;
  dataTableContents = [];
  worldData: CountriesCount[];
  title = '';

  pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
  };

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
  };

  countries: CountriesCount[];
  constructor(private dataService: CovidDataService) {}

  // getChartData() {
  //   let Datatable = [];
  //   Datatable.push(['Country', 'Cases']);
  //   this.dataService.getCountriesArrayData().subscribe((data) => {
  //     this.countries = data;
  //     this.countries.forEach((element) => {
  //       if (element.totalConfirmed > 300000)
  //         Datatable.push([element.country, element.totalConfirmed]);
  //     });
  //   });

  //   this.pieChart = {
  //     chartType: 'PieChart',
  //     dataTable: dataTableContents,
  //     firstRowIsData: false,
  //     options: {
  //       width: 300,
  //       height: 300,
  //       // legend: 'none',
  //       chartArea: { left: 15, top: 15, right: 15, bottom: 0 },
  //       pieSliceText: 'label',
  //       title: 'title',
  //     },
  //   };

  //   this.columnChart = {
  //     chartType: 'ColumnChart',
  //     dataTable: dataTableContents,
  //     firstRowIsData: false,
  //     options: {
  //       width: 300,
  //       height: 400,
  //       title: 'title',
  //     },
  //   };
  // }
  // end of getChartData function

  fetchChartData(caseClass: string) {
    console.log('started fetchChartData function with caseClass: ', caseClass);
    this.dataTableContents = [];
    this.worldData.forEach((cases) => {
      let country: string;
      let value: number;

      if (caseClass === 'Confirmed') {
        if (cases.totalConfirmed > 100000) {
          country = cases.country;
          value = cases.totalConfirmed;
        }
        this.title = `Countries having more than 2,00,000 ${caseClass} cases`;
      }

      if (caseClass === 'Recovered') {
        if (cases.totalRecovered > 50000) {
          country = cases.country;
          value = cases.totalRecovered;
        }
        this.title = `Countries having more than 50,000 ${caseClass} cases`;
      }

      if (caseClass === 'Dead') {
        if (cases.totalDeaths > 5000) {
          country = cases.country;
          value = cases.totalDeaths;
        }
        this.title = `Countries having more than 5,000 deaths`;
      }

      if (country && value) {
        this.dataTableContents.push([country, value]);
      }
    });
    console.log('data Contents: ', this.dataTableContents);

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: this.dataTableContents,
      firstRowIsData: true,
      options: {
        width: 300,
        height: 300,
        // legend: 'none',
        chartArea: { left: 15, top: 15, right: 15, bottom: 0 },
        pieSliceText: 'label',
        title: this.title,
      },
    };
    // let ccComponent = this.pieChart.component;
    // let ccWrapper = ccComponent.wrapper;
    // ccComponent.draw();

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: this.dataTableContents,
      firstRowIsData: true,
      options: {
        width: 300,
        height: 400,
        title: this.title,
      },
    };
  }

  ngOnInit(): void {
    this.dataService.getCountriesArrayData().subscribe({
      next: (result) => {
        console.log('result: ', result);
        this.worldData = result;
        this.fetchChartData('Confirmed');
      },
    });
  }
}
