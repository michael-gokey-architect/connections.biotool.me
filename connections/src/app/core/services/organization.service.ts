import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Organization } from '../models/organization.interface';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private apiURL = "http://api.mozli.com/Biodata";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getOrganizations(): Observable<any> {

    return this.httpClient.get(this.apiURL + '/GetOrganizations/')

      .pipe(
        catchError(this.errorHandler)
      )
  }

  createOrganization(organization: Organization): Observable<any> {

    return this.httpClient.post(this.apiURL + '/AddOrganization/', JSON.stringify(organization), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteOrganizations(organization_id: number): Observable<any> {

    return this.httpClient.delete(this.apiURL + '/DeleteOrganization/'+ organization_id)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  //we need to pass org id as a query parameter to update
  //right now org id is given as req body 
  updateOrganization(organization: Organization): Observable<any> {

    return this.httpClient.put(this.apiURL + '/UpdateOrganization/', JSON.stringify(organization), this.httpOptions)

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
