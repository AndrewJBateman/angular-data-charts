import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { CovidCount, Case } from '../models/covid';

const apiUrl = 'https://covidapi.info/api/v1/global';
const baseUrl = 'https://covid19.mathdro.id/api/';

@Injectable({
  providedIn: 'root',
})
export class CovidDataService {
  constructor(private http: HttpClient) {}

  getGlobalData(): Observable<CovidCount> {
    return this.http.get<CovidCount>(apiUrl).pipe(
      tap((data: CovidCount) => console.log('data', data)),
      map((data: CovidCount) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getCountriesData(): Observable<Case[]> {
    // return this.http.get<Case[]>(baseUrl + 'confirmed');
    return this.http.get<Case[]>(baseUrl + 'confirmed').pipe(
      tap((data: Case[]) => console.log('data', data)),
      map((data: Case[]) => data),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}
