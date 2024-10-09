import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Collector } from '../models/collecter.interface';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  /* Get all Collectors */
  getAllCollectors(): Observable<any> {
    return this.http
      .get(environment.apiUrl_collector + '/GetAllCollectors/')
      .pipe(catchError(this.handleError));
  }
  
   /* Get Collector by Id */
   getCollectorByTrid(trid: number): Observable<Collector> {
    return this.http
      .get<Collector>(environment.apiUrl_collector + '/GetCollectorByTrid/' + trid)
      .pipe(catchError(this.handleError));
  }

  /* Create a new Collector */
  createCollector(collector: Collector): Observable<Collector> {
    return this.http
      .post<Collector>(environment.apiUrl_collector + '/AddCollector/', JSON.stringify(collector), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateCollector(collector: Collector): Observable<any> {
    return this.http.put(environment.apiUrl_collector + '/UpdateCollector/', JSON.stringify(collector), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
