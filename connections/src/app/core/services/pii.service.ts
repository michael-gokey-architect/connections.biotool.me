import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pii } from '../models/pii.interface';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class PiiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getUserPii(user_id: number): Observable<any> {
    return this.httpClient
      .get(environment.apiUrl_userPii + '/GetUserPii/' + user_id)

      .pipe(catchError(this.errorHandler));
  }

  createUserPii(pii: Pii): Observable<any> {
    return this.httpClient
      .post(
        environment.apiUrl_userPii + '/AddUserPii',
        JSON.stringify(pii),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  deleteUserPii(user_id: number): Observable<any> {
    return this.httpClient
      .delete(environment.apiUrl_userPii + '/DeleteUserPii/' + user_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass org id as a query parameter to update
  //right now org id is given as req body
  updateUserPii(pii: Pii): Observable<any> {
    return this.httpClient
      .put(
        environment.apiUrl_userPii + '/UpdateUserPii/',
        JSON.stringify(pii),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(error.message || 'Server Error'));
  }
}
