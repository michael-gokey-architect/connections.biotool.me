import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class EventService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getEvents(): Observable<any> {
    return this.httpClient
      .get(environment.apiUrl_event+ '/GetAllEvents/')

      .pipe(catchError(this.errorHandler));
  }

  createEvent(event: Event): Observable<any> {
    return this.httpClient
      .post(
        environment.apiUrl_event + '/AddEvent/',
        JSON.stringify(event),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  deleteEvents(event_id: number): Observable<any> {
    return this.httpClient
      .delete(environment.apiUrl_event + '/DeleteEvent/' + event_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass event id as a query parameter to update
  //right now event id is given as req body
  updateEvent(event: Event): Observable<any> {
    return this.httpClient
      .put(
        environment.apiUrl_event + '/UpdateEvent/',
        JSON.stringify(event),
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
