import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  envName!: string;
  
  constructor() { }
  
  getEnvironment(){
    this.envName = environment.environmentName;
    return this.envName
  }
}
