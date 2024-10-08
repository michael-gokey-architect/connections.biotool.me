import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { Quest } from '../models/quest.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  /* Get a Quest by ID */
  getQuest(questId: number): Observable<Quest> {
    return this.http
      .get<Quest>(environment.apiUrl_quest + '/GetQuest/' +   questId)
      .pipe(catchError(this.handleError));
  }

   /* Get a Quest by  joid */
   getQuestByJoid(joid: number): Observable<Quest> {
    return this.http
      .get<Quest>(environment.apiUrl_quest + '/GetQuestByJoid/' + joid)
      .pipe(catchError(this.handleError));
  }

   /* Get a Quest by event */
   getQuestByEvent(eventId: number): Observable<Quest> {
    return this.http
      .get<Quest>(environment.apiUrl_quest + '/GetQuestsByEvent/' + eventId)
      .pipe(catchError(this.handleError));
  }

  /* Get a Quest by event */
  getQuestByOrganization(orgId: number): Observable<Quest> {
      return this.http
        .get<Quest>(environment.apiUrl_quest + '/GetQuestsByOrganization/' + orgId)
        .pipe(catchError(this.handleError));
  }
  

  /* Create a new Quest */
  createQuest(quest: Quest): Observable<Quest> {
    return this.http
      .post<Quest>(environment.apiUrl_quest + '/AddQuest/', JSON.stringify(quest), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateQuest(quest: Quest): Observable<any> {
    return this.http.put(environment.apiUrl_quest + '/UpdateQuest/', JSON.stringify(quest), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  /* Delete a Quest */
  deleteQuest(questId: number): Observable<any> {
    return this.http.delete(environment.apiUrl_quest + '/DeleteQuest/'+ questId, this.httpOptions)
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
