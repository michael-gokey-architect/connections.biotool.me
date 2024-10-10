import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-badge-landing',
  templateUrl: './badge-landing.component.html',
  styleUrls: ['./badge-landing.component.css']
})
export class BadgeLandingComponent {
  constructor(private router: Router){
  }

  onGetBadge() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-badge')
  }

  onCreateBadge() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-badge')
  }
}
