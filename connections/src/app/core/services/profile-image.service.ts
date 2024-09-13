import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  addProfileImage(imageObject: {}): Observable<any> {

    return this.httpClient.post(environment.apiUrl_profileImage + '/AddProfilePictureToUser/', JSON.stringify(imageObject), this.httpOptions)

      .pipe(
        catchError(this.errorHandler)
      )
  }

  getProfileImage(userId: number): Observable<any> {

    return this.httpClient.get(environment.apiUrl_user + '/GetUserProfile/' + userId)

      .pipe(
        catchError(this.errorHandler)
      )
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
