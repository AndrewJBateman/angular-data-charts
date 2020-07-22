import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { CovidCount } from '../../../models/covid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: CovidCount;
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  date = '';

  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData() {
    this.covidDataService.getGlobalData().subscribe((data: CovidCount) => {
      this.data = data;
      this.totalConfirmed = this.data.result.confirmed;
      this.totalDeaths = this.data.result.deaths;
      this.totalRecovered = this.data.result.recovered;
      this.date = this.data.date;
      console.log('data for html', data);
    });
  }
}
