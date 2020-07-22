import { Component, OnInit } from '@angular/core';
import { Case } from '../../../../models/covid';
import { CovidDataService } from '../../../../services/covid-data.service';

@Component({
  selector: 'app-covid-countries',
  templateUrl: './covid-countries.component.html',
  styleUrls: ['./covid-countries.component.css'],
})
export class CovidCountriesComponent implements OnInit {
  data: Case[];

  constructor(private covidDataService: CovidDataService) {}

  ngOnInit(): void {
    this.covidDataService.getCountriesData().subscribe((data) => {
      console.log('final data', data);
    });
  }
}
