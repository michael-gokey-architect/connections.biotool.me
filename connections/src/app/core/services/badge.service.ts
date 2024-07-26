import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Badge } from '../models/badge.interface';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBadge(badge_id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl_badges + '/GetBadge/' + badge_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createBadge(badge: Badge): Observable<any> {
    return this.httpClient.post(environment.apiUrl_badges + '/AddBadge/', JSON.stringify(badge), this.httpOptions)
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
