import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { CovidCount } from '../models/covid-count';

const apiUrl =
  'https://covidapi.info/api/v1/global';

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
}
