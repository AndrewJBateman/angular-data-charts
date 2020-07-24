import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { GlobalCount } from '../../../models/covid';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: Observable<GlobalCount>;
  results = [];
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  date = '';

  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData(): void {
    this.covidDataService.getGlobalData().subscribe((data: GlobalCount) => {
      this.totalConfirmed = data.result.confirmed;
      this.totalDeaths = data.result.deaths
      this.totalRecovered = data.result.recovered;
      this.date = data.date;
    });
  }
}
