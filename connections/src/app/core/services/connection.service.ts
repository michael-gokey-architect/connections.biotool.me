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
    private apiURL = 'http://api.mozli.com/Connection';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getFollowsConnections(user_id: number): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/GetFollowsByUser/' + user_id)

      .pipe(catchError(this.errorHandler));
  }

  followUser(user_id: number, follow_user_id: number): Observable<any> {
    return this.httpClient
      .post(
        this.apiURL + '/FollowUser/' + user_id +'/'+follow_user_id,
        this.httpOptions
      )

      .pipe(catchError(this.errorHandler));
  }

  unfollowUser(user_id: number, follow_user_id: number): Observable<any> {
    return this.httpClient
      .delete(this.apiURL + '/UnfollowUser/' + user_id +'/'+follow_user_id)

      .pipe(catchError(this.errorHandler));
  }

  //we need to pass connection id as a query parameter to update
  //right now connection id is given as req body
  acceptFriend(user_id: number, friend_user_id: number): Observable<any> {
    return this.httpClient
      .put(
        this.apiURL + '/AcceptFriend/' + user_id +'/'+friend_user_id,
        
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
