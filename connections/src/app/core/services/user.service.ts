import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { User, userWithMessage } from './../models/user.interface';
import { environment } from './../../../environments/environment.dev';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiURL = "http://api.mozli.com/UserProfile";
  private loginUrl = 'http://api.mozli.com/BioData'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/GetUserProfiles/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getUserProfile(user_id: number): Observable<any> {

    return this.httpClient.get(environment.apiUrl_user + '/GetUserProfile/' + user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  createUser(user: User): Observable<any> {
    return this.httpClient.post(this.apiURL + '/AddNewUser', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  deleteUser(user_id: number): Observable<any> {
    return this.httpClient.delete(this.apiURL + '/DeleteUserProfile/'+ user_id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  updateUser(user: User): Observable<any> {
    return this.httpClient.put(this.apiURL + '/UpdateUserProfile/', JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  login(user: any): Observable<any> {
    return this.httpClient.post(this.loginUrl + '/Login', JSON.stringify(user), this.httpOptions)
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

  /* List all social media links */

  // /* List all users */
  // getUsers(): Observable<User[]> {
  //   return this.http
  //     .get<User[]>(`${environment.apiUrl_user}/GetUserProfiles`)
  //     .pipe(catchError(this.handleError));
  // }


  // /* Get a user by ID */
  // getUserByID(userId: string): Observable<User> {
  //   const url = `${environment.apiUrl_user}/${userId}`;
  //   return this.http.get<any>(url).pipe(catchError(this.handleError));
  // }


  // /* Create a new user */
  // createUser(user: User): Observable<userWithMessage> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http
  //     .post<userWithMessage>(`${environment.apiUrl_user}/AddNewUser`, user)
  //     .pipe(catchError(this.handleError));
  // }

  


  // /* Update a user */
  // updateUserProfile(userId: number, user: User): Observable<User> {
  //   const url = `${environment.apiUrl_user}/${userId}`;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http
  //     .put<User>(url, user, { headers })
  //     .pipe(catchError(this.handleError));
  // }

  // updateUserBio(obj:any): Observable<any>{
  //   return this.http.post(`${environment.apiUrl_user}/update-user-bio`, obj)
  // }


  // /* Delete a user */
  // deleteUser(userId: number): Observable<void> {
  //   const url = `${environment.apiUrl_user}/${userId}`;
  //   return this.http.delete<void>(url).pipe(catchError(this.handleError));
  // }


  // handleError(error: any) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // Server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

}

// TODO:VB 
// TODO: Venkat
// https://saketsk.hashnode.dev/day-12-angular-crud-operations-using-json-server
