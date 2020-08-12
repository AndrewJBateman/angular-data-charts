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
  pieChart: GoogleChartInterface = {
    chartType: 'PieChart',
  };

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
  };

  countries: CountriesCount[];
  constructor(private dataService: CovidDataService) {}

  getChartData() {
    let Datatable = [];
    Datatable.push(['Country', 'Cases']);
    this.dataService.getCountriesArrayData().subscribe((data) => {
      this.countries = data;
      this.countries.forEach((element) => {
        if (element.totalConfirmed > 3000)
          Datatable.push([element.country, element.totalConfirmed]);
      });
      // console.log('dataTable: ', Datatable);
    });

    this.pieChart = {
      chartType: 'PieChart',
      dataTable: Datatable,
      firstRowIsData: false,
      options: {
        width: 300,
        height: 300,
        // legend: 'none',
        chartArea: { left: 15, top: 15, right: 15, bottom: 0 },
        pieSliceText: 'label',
        title: 'Pie Chart: Country Covid %',
      },
    };

    this.columnChart = {
      chartType: 'ColumnChart',
      dataTable: Datatable,
      firstRowIsData: false,
      options: {
        width: 300,
        height: 400,
        title: 'Bar Chart: Countries Covid Confirmed Cases',
      },
    };
  }

  ngOnInit() {
    this.getChartData();
  }
}
