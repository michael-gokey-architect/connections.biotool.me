import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tags } from '../models/tags.interface';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class TagsService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getTags(): Observable<any> {
    return this.httpClient
      .get(environment.apiUrl_tags + '/GetTags/')

      .pipe(catchError(this.errorHandler));
  }

  createTag(tag: Tags): Observable<any> {
    return this.httpClient
      .post(environment.apiUrl_tags + '/AddTag/', JSON.stringify(tag), this.httpOptions)

      .pipe(catchError(this.errorHandler));
  }

  deleteTags(tag_id: number): Observable<any> {
    return this.httpClient
      .delete(environment.apiUrl_tags + '/DeleteTag/' + tag_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass tag id as a query parameter to update
  //right now tag id is given as req body
  updateTag(tag: Tags): Observable<any> {
    return this.httpClient
      .put(environment.apiUrl_tags + '/UpdateTag/', JSON.stringify(tag), this.httpOptions)

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
