import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.dev';
import { QuestReward } from '../models/quest-reward.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestRewardService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) {}

  /* Get a Quest Reward by ID */
  getQuestReward(rewardId: number): Observable<QuestReward> {
    return this.http
      .get<QuestReward>(environment.apiUrl_questReward + '/GetQuestReward/' + rewardId)
      .pipe(catchError(this.handleError));
  }

  /* Create a new Quest Reward */
  createQuestReward(questReward: QuestReward): Observable<QuestReward> {
    return this.http
      .post<QuestReward>(environment.apiUrl_questReward + '/AddQuestReward/', JSON.stringify(questReward), this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  updateQuestReward(questReward: QuestReward): Observable<any> {
    return this.http.put(environment.apiUrl_questReward + '/UpdateQuestReward/', JSON.stringify(questReward), this.httpOptions)
      .pipe(
        catchError(this.handleError)
      )
  }

  /* Delete a Quest Reward */
  deleteQuestReward(rewardId: number): Observable<any> {
    return this.http.delete(environment.apiUrl_questReward + '/DeleteQuestReward/'+ rewardId, this.httpOptions)
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
