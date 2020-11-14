import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { StorageService } from '../services/localstorage.service';
import { GlobalCount, CountriesCount, NewsItems } from '../models/covid';
import { Location } from '../models/location';

const apiBaseUrl = 'https://api.coronatracker.com/v3/stats/worldometer/';
const apiNewsBaseUrl = 'https://api.coronatracker.com/news/trending';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  storedCountryData: CountriesCount[];
  userCountryData: Location;
  userCountryCode: string;
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
    this.userCountryData = this.storageService.get('storedUserCountryData');
    this.userCountryCode = this.userCountryData.country_code;
    if (this.userCountryCode) {
      return this.http
        .get<CountriesCount[]>(
          apiBaseUrl + 'country?countryCode=' + this.userCountryCode
          // apiBaseUrl + 'country?countryCode=ES'
        )
        .pipe(
          // tap((data: CountriesCount[]) => console.log('userCountry data', data)),
          map((data: CountriesCount[]) => data),
          catchError((err) => {
            return throwError(err);
          })
        );
    }
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
    this.userCountry = this.storageService.get(
      'storedUserCountryData'
    ).country_name;
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
