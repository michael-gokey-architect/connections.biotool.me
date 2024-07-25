import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';
import { Connection } from '../models/connection.interface';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {

  envName!: string;
    private apiURL = 'http://api.mozli.com/Biodata';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getConnections(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/GetConnections/')

      .pipe(catchError(this.errorHandler));
  }

  createConnection(connection: Connection): Observable<any> {
    return this.httpClient
      .post(
        this.apiURL + '/AddConnection/',
        JSON.stringify(connection),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  deleteConnections(connection_id: number): Observable<any> {
    return this.httpClient
      .delete(this.apiURL + '/DeleteConnection/' + connection_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass connection id as a query parameter to update
  //right now connection id is given as req body
  updateConnection(connection: Connection): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + '/UpdateConnection/',
        JSON.stringify(connection),
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
  
  getEnvironment(){
    this.envName = environment.environmentName;
    return this.envName
  }
}
