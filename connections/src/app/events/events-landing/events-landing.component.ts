import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-landing',
  templateUrl: './events-landing.component.html',
  styleUrls: ['./events-landing.component.css'],
})
export class EventsLandingComponent {
  constructor(private router: Router) {}

  onGetEvent() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-event');
  }

  onCreateEvent() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-event');
  }

  onDeleteEvent() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-event');
  }
  onUpdateEvent() {
    this.router.navigateByUrl('/update-event');
  }
}
