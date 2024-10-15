import { Component } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-events-get',
  templateUrl: './events-get.component.html',
  styleUrls: ['./events-get.component.css']
})
export class EventsGetComponent {
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
