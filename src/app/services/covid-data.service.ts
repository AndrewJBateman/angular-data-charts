import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { StorageService } from '../services/localstorage.service';
import { GlobalCount, CountriesCount, NewsItems } from '../models/covid';

const apiBaseUrl = 'http://api.coronatracker.com/v3/stats/worldometer/';
const apiNewsBaseUrl = 'http://api.coronatracker.com/news/trending';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  storedCountryData: CountriesCount[];
  userCountryCode: '';
  userCountry: '';
  newsArrayLength: number;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  getGlobalData(): Observable<GlobalCount> {
    return this.http.get<GlobalCount>(apiBaseUrl + 'global').pipe(
      // tap((data: GlobalCount) => console.log('data', data)),
      map((data: GlobalCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getUserCountryData(): Observable<CountriesCount[]> {
    this.userCountryCode = this.storageService.get('userCountryData').alpha2;
    return this.http
      .get<CountriesCount[]>(
        apiBaseUrl + 'country?countryCode=' + this.userCountryCode
      )
      .pipe(
        // tap((data: CountriesCount[]) => console.log('userCountry data', data)),
        map((data: CountriesCount[]) => data),
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  getCountriesArrayData(): Observable<CountriesCount[]> {
    return this.http.get<CountriesCount[]>(apiBaseUrl + 'country').pipe(
      // tap((data: CountriesCount[]) => console.log('countries data', data)),
      map((data: CountriesCount[]) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  // create news API observable
  getCovidNews(): Observable<NewsItems> {
    this.newsArrayLength = 20;
    this.storageService.set('newsArrayLength', this.newsArrayLength);
    this.userCountry = this.storageService.get('userCountryData').name;
    return this.http
      .get<NewsItems>(
        apiNewsBaseUrl +
          `?limit=${this.newsArrayLength}&offset&country=${this.userCountry}`
      )
      .pipe(
        // tap((data: NewsItems) => console.log('news data', data)),
        map((data: NewsItems) => data),
        catchError((err) => {
          return throwError(err);
        })
      );
  }
}
