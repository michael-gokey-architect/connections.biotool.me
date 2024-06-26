import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Organization } from '../models/organization.interface';
import { Pii } from '../models/pii';

@Injectable({
  providedIn: 'root'
})
export class PiiService {

  private apiURL = "http://api.mozli.com/Biodata";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUserPii(user_id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/GetUserPii/' + user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createUserPii(pii: Pii): Observable<any> {
    return this.httpClient.post(this.apiURL + '/AddUserPii/', JSON.stringify(pii), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteUserPii(user_id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/DeleteUserPii/'+ user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateUserPii(pii: Pii): Observable<any> {
    return this.httpClient.put(this.apiURL + '/UpdateUserPii/', JSON.stringify(pii), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(error.message || 'Server Error'));
 }
}
