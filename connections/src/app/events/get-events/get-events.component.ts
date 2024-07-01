import { Component } from '@angular/core';
import { Event } from 'src/app/core/models/event.interface';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.css'],
})
export class GetEventsComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    //get all events
    this.eventService.getEvents().subscribe({
      next: (data) => {
        this.events = data;
        console.log('Events:', this.events);
      },
      error: (error) => {
        console.error('Error fetching events:', error);
      },
      complete: () => {
        console.log('Request to fetch Event completed');
      },
    });
  }
}
