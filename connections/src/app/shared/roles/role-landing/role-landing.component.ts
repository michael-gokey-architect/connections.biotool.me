import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-landing',
  templateUrl: './role-landing.component.html',
  styleUrls: ['./role-landing.component.css'],
})
export class RoleLandingComponent {
  constructor(private router: Router) {}

  onGetRole() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-role');
  }

  onCreateRole() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-role');
  }

  onDeleteRole() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-role');
  }
  onUpdateRole() {
    this.router.navigateByUrl('/update-role');
  }
}
