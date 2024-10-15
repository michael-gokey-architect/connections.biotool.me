import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-crud-landing',
  templateUrl: './events-crud-landing.component.html',
  styleUrls: ['./events-crud-landing.component.css']
})
export class EventsCrudLandingComponent {
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
