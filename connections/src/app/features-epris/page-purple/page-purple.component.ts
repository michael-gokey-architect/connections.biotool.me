import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-purple',
  templateUrl: './page-purple.component.html',
  styleUrls: ['./page-purple.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PagePurpleComponent {
  userFullName = 'John Bianchi';

  constructor(private router: Router) {}

  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/bianchijohn/', '_blank');
  }
  onPatchWRKClick() {
    window.open('https://www.circlepass.io/patchwrq', '_blank');
  }
  onQuestAppClick() {
    window.open('https://www.circlepass.io/quest', '_blank');
  }
  onCreateOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/organization');
  }
  onEvents() {
    //using router to navigate on same page
    this.router.navigateByUrl('/events');
  }
  onConnections() {
    //using router to navigate on same page
    this.router.navigateByUrl('/connections');
  }
}
