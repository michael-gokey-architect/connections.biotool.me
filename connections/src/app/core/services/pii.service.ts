import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Pii } from '../models/pii.interface';

@Injectable({
  providedIn: 'root',
})
export class PiiService {
  private apiURL = 'http://api.mozli.com/Biodata';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getPii(pii_id: number): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/GetUserPii/' + pii_id)

      .pipe(catchError(this.errorHandler));
  }

  createPii(pii: Pii): Observable<any> {
    return this.httpClient
      .post(
        this.apiURL + '/AddUserPii/',
        JSON.stringify(pii),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  deletePii(pii_id: number): Observable<any> {
    return this.httpClient
      .delete(this.apiURL + '/DeleteUserPii/' + pii_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass org id as a query parameter to update
  //right now org id is given as req body
  updatePii(pii: Pii): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + '/UpdateUserPii/',
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
