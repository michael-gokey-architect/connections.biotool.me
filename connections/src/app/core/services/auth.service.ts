import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.interface';
// import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<any | null>;
  private loggedInUserSubject: BehaviorSubject<any | null>;
  private loggedInUserTokenSub: BehaviorSubject<any | null>;
  public user: Observable<any | null>;
  public loggedInUser: Observable<any | null>;
  public userTokenValue: Observable<any | null>;
  constructor() { 
    this.userSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('googleUser')!));
    this.user = this.userSubject.asObservable();

    this.loggedInUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('loggedinUser')!));
    this.loggedInUser = this.loggedInUserSubject.asObservable();

    this.loggedInUserTokenSub = new BehaviorSubject(JSON.parse(sessionStorage.getItem('user_lit_')!));
    this.userTokenValue = this.loggedInUserTokenSub.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  public get loggedUserValue(){
    return this.loggedInUserSubject.value;
  }

  public get userToken(){
    return this.loggedInUserTokenSub.value;
  }

  public setToken(data:any){
    sessionStorage.setItem('user_lit_', JSON.stringify(data));
    this.loggedInUserTokenSub.next(data);
  }

  public setUserValue(userObject:any){
    sessionStorage.setItem('loggedinUser', JSON.stringify(userObject));
    this.loggedInUserSubject.next(userObject);
  }

  public logout(){
    sessionStorage.removeItem('user_lit_');
    sessionStorage.removeItem('loggedinUser');
    this.loggedInUserSubject.next(null);
    this.loggedInUserTokenSub.next(null);
  }

  // encryptData(data: string, key: string): string {
  //     return CryptoJS.AES.encrypt(data, key).toString();    
  // }

  getValuesFromToken():any{
    return JSON.parse(atob(this.userToken.token.split('.')[1]));
  }

  prepareFirstTimeUserProfile(){
    const orgid = localStorage.getItem('org_id') ?  Number(localStorage.getItem('org_id')) : 10;
    const userProfile    =  {
      username: this.userValue.email,
      first_name: this.userValue.given_name,
      last_name: this.userValue.family_name,
      email: this.userValue.email,
      // sub: this.userValue.sub,
      hashed_password: 'test', //this.encryptData(this.userValue.sub, 'test'),
      organization_id: orgid
    }
    console.log(userProfile)
    return userProfile;
  }

// login(username: string, password: string) {
//   return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
//       .pipe(map(user => {
//           // store user details and jwt token in local storage to keep user logged in between page refreshes
//           localStorage.setItem('user', JSON.stringify(user));
//           this.userSubject.next(user);
//           return user;
//       }));
// }

// logout() {
//   // remove user from local storage to log user out
//   localStorage.removeItem('user');
//   this.userSubject.next(null);
//   this.router.navigate(['/login']);
// }


}




// TODO: Sunny
// https://www.bezkoder.com/angular-16-jwt-auth/