import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pii-landing',
  templateUrl: './pii-landing.component.html',
  styleUrls: ['./pii-landing.component.css'],
})
export class PiiLandingComponent {
  constructor(private router: Router) {}

  onGetPii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-pii');
  }

  onCreatePii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-pii');
  }

  onDeletePii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-pii');
  }
  onUpdatePii() {
    this.router.navigateByUrl('/update-pii');
  }
}
