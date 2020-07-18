import { Component, OnInit } from '@angular/core';

import { CovidDataService } from '../../../services/covid-data.service';
import { CovidCount } from '../../../models/covid-count';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data: CovidCount;
  date: string;
  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData() {
    this.covidDataService.getGlobalData().subscribe((data: CovidCount) => {
      this.data = data;
      console.log('data for html', data);
    });
  }
}
