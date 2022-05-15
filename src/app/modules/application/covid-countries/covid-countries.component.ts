import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { CountryCount } from '../../../models/covid';
import { CovidDataService } from '../../../services/covid-data.service';
import { StorageService } from '../../../services/localstorage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-covid-countries',
  templateUrl: './covid-countries.component.html',
  styleUrls: ['./covid-countries.component.css'],
})
export class CovidCountriesComponent implements OnInit {
  data: Observable<CountryCount>;
  storedCountryData: Observable<CountryCount>;
  // countries: CountriesCount;
  todayDate: Date;

  ELEMENT_DATA: CountryCount[] = [];
  columnNames: string[] = ['country', 'confirmed', 'deaths', 'recovered'];
  dataSource = new MatTableDataSource<CountryCount>(this.ELEMENT_DATA);

  constructor(private covidDataService: CovidDataService, private storageService: StorageService) {}

  ngOnInit() {
    this.getCountryListData();
  }

  public getCountryListData() {
    this.covidDataService.getCountriesArrayData().subscribe(data => {
      this.dataSource.data = data as CountryCount[];
      this.todayDate = this.dataSource.data[0].lastUpdated;
    });
  }
}
