import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tags } from '../models/tags.interface';
@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private apiURL = 'http://api.mozli.com/Biodata';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/GetTags/')

      .pipe(catchError(this.errorHandler));
  }

  createTag(tag: Tags): Observable<any> {
    return this.httpClient
      .post(
        this.apiURL + '/AddTag/',
        JSON.stringify(tag),
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass role id as a query parameter to update
  //right now role id is given as req body
  updateTag(tag: Tags): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + '/UpdateTag/',
        JSON.stringify(tag),
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
