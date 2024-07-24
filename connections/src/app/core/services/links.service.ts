import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Links } from '../models/links';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getLink(user_id: number): Observable<any> {
    return this.httpClient.get(environment.apiUrl_socialMediLink + '/GetSocialMediaLinks/' + user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createLink(link: Links): Observable<any> {
    return this.httpClient.post(environment.apiUrl_socialMediLink + '/AddSocialMediaLink/', JSON.stringify(link), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteLink(key_id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl_socialMediLink + '/DeleteSocialMediaLink/'+ key_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateLink(link: Links): Observable<any> {
    return this.httpClient.put(environment.apiUrl_socialMediLink + '/UpdateSocialMediaLink/', JSON.stringify(link), this.httpOptions)
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
