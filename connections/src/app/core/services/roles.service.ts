import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Roles } from '../models/roles.interface';

@Injectable({
  providedIn: 'root',
})
export class RolesService {
  private apiURL = 'http://api.mozli.com/Biodata';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getUserRoles(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/GetUserRoles/')

      .pipe(catchError(this.errorHandler));
  }

  createUserRole(role: Roles): Observable<any> {
    return this.httpClient
      .post(
        this.apiURL + '/AddUserRole/',
        JSON.stringify(role),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  deleteUserRoles(role_id: number): Observable<any> {
    return this.httpClient
      .delete(this.apiURL + '/DeleteUserRole/' + role_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass role id as a query parameter to update
  //right now role id is given as req body
  updateUserRole(role: Roles): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + '/UpdateUserRole/',
        JSON.stringify(role),
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
