import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { GlobalCount, CountriesCount } from '../models/covid';

const globalApiUrl = 'https://covidapi.info/api/v1/global';
const countriesApiUrl = 'http://api.coronatracker.com/v2/analytics/country';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private http: HttpClient) {}

  getGlobalData(): Observable<GlobalCount> {
    return this.http.get<GlobalCount>(globalApiUrl).pipe(
      // tap((data: GlobalCount) => console.log('data', data)),
      map((data: GlobalCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getCountriesData(): Observable<CountriesCount> {
    return this.http.get<CountriesCount>(countriesApiUrl).pipe(
      tap((data: CountriesCount) => console.log('countries data', data)),
      map((data: CountriesCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
