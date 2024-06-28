import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Links } from '../models/links';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  private apiURL = "http://api.mozli.com/Biodata";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getLink(user_id: number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/GetSocialMediaLinks/' + user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createLink(link: Links): Observable<any> {
    return this.httpClient.post(this.apiURL + '/AddSocialMediaLink/', JSON.stringify(link), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteLink(user_id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/DeleteSocialMediaLInk/'+ user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateLink(link: Links): Observable<any> {
    return this.httpClient.put(this.apiURL + '/UpdateSocialMediaLink/', JSON.stringify(link), this.httpOptions)
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
