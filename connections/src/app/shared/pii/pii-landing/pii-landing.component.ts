import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pii-landing',
  templateUrl: './pii-landing.component.html',
  styleUrls: ['./pii-landing.component.css']
})
export class PiiLandingComponent {
  constructor(private router: Router){
  }

  onGetUserPii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-pii')
  }

  onCreateUserPii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-pii')
  }

  onDeleteUserPii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-pii')
  }
  onUpdateUserPii() {
    this.router.navigateByUrl('/update-pii')
  }
}
