import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CountriesCount } from '../../../models/covid';
import { CovidDataService } from '../../../services/covid-data.service';
import { StorageService } from '../../../services/localstorage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid-countries',
  templateUrl: './covid-countries.component.html',
  styleUrls: ['./covid-countries.component.css'],
})
export class CovidCountriesComponent implements OnInit {
  data: Observable<CountriesCount>;
  storedCountryData: Observable<CountriesCount>;
  // countries: CountriesCount;
  todayDate: Date;

  ELEMENT_DATA: CountriesCount[] = [];
  columnNames: string[] = ['country', 'confirmed', 'deaths', 'recovered'];
  dataSource = new MatTableDataSource<CountriesCount>(this.ELEMENT_DATA);

  constructor(
    private covidDataService: CovidDataService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.getCountryListData();
  }

  public getCountryListData() {
    this.covidDataService.getCountriesArrayData().subscribe((data) => {
      this.dataSource.data = data as CountriesCount[];
      this.todayDate = this.dataSource.data[0].lastUpdated;
      console.log('covid-countries data: ', this.dataSource.data);
    });
  }
}
