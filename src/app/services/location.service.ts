import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { Location } from '../models/location';

const apiUrl = 'https://ipapi.co/json/';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<Location> {
    return this.http.get<Location>(apiUrl).pipe(
      // tap((data: Location) => console.log('data: ', data.country_name)),
      map((data: Location) => data),
      catchError((err) => {
        return throwError('Location data not found, error: ', err);
      })
    );
  }
}
