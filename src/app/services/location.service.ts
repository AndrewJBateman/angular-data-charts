import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Location } from '../models/location';

const apiUrl = 'https://api.ipgeolocationapi.com/geolocate';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocation(): Observable<Location> {
    return this.http.get<Location>(apiUrl).pipe(
      map((data: Location) => data),
      catchError((err) => {
        return throwError('Location not found, error: ', err);
      })
    );
  }
}
