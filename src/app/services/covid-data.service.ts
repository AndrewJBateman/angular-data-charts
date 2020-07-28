import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { GlobalCount, CountriesCount } from '../models/covid';

const apiBaseUrl = 'http://api.coronatracker.com/v3/stats/worldometer/';
const apiNewsBaseUrl = 'http://api.coronatracker.com/news/trending';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private http: HttpClient) {}

  getGlobalData(): Observable<GlobalCount> {
    return this.http.get<GlobalCount>(apiBaseUrl + 'global').pipe(
      // tap((data: GlobalCount) => console.log('data', data)),
      map((data: GlobalCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getCountriesData(): Observable<CountriesCount> {
    return this.http.get<CountriesCount>(apiBaseUrl + 'country').pipe(
      // tap((data: CountriesCount) => console.log('countries data', data)),
      map((data: CountriesCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getCovidNews() {
    return this.http
      .get(apiNewsBaseUrl + `?limit=10&offset&country=France`)
      .pipe(
        // tap((data: any) => console.log('news data', data)),
        map((data: any) => data),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
