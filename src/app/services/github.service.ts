import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { throwError, Observable } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

import { User } from "../models/user";
import { environment } from "src/environments/environment";

const baseUrl = "https://api.github.com/users/";
// const params = new HttpParams().set("api_key", environment.GITHUB_KEY);

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getUser(user: string): Observable<User> {
    const userSearchUrl = `${baseUrl + user}`;
    return this.http
      // .get<User>(userSearchUrl, { params })
      .get<User>(userSearchUrl)
      .pipe(
        // tap((data: User) => console.log('user data', data)),
        map((data: User) => data),
        catchError((err) => {
          return throwError(
            "There was a problem fetching data from Github API, error: ",
            err
          );
        })
      );
  }

  // getRepos(user: string): Observable<Repo> {
  //   const repoSearchUrl = `${
  //     baseUrl + user + "/repos?order=updated&sort=desc?per_page=100&page=1"
  //   }`;

  //   return this.http
  //     .get<Repo>(repoSearchUrl, { params })
  //     .pipe(
  //       map((obj) => obj),
  //       catchError((err) => {
  //         return throwError(
  //           "There was a problem fetching data from Github API, error: ",
  //           err
  //         );
  //       })
  //     );
  // }
}
