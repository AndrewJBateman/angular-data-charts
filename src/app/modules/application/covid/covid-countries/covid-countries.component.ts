import { Component, OnInit } from '@angular/core';
import { CountriesCount } from '../../../../models/covid';
import { CovidDataService } from '../../../../services/covid-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid-countries',
  templateUrl: './covid-countries.component.html',
  styleUrls: ['./covid-countries.component.css'],
})
export class CovidCountriesComponent implements OnInit {
  data: Observable<CountriesCount>;
  countries: CountriesCount;

  constructor(private covidDataService: CovidDataService) {}

  ngOnInit() {
    this.covidDataService.getCountriesData().subscribe((data: CountriesCount) => {
      this.countries = data;
      console.log('final countries data', this.countries);
    });
  }
}
