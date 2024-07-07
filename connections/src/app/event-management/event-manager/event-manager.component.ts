import { Component, Input } from '@angular/core';
import { Organization, Event } from '../org-sample';

@Component({
  selector: 'app-event-manager',
  templateUrl: './event-manager.component.html',
  styleUrls: ['./event-manager.component.css']
})
export class EventManagerComponent {
  @Input() organization!: any;
  newEventName: string = '';
  selectedEvent: Event | null = null;

  addEvent() {
    if (this.organization) {
      const newEvent: Event = {
        id: this.organization.events.length + 1,
        name: this.newEventName,
        panelists: []
      };
      this.organization.events.push(newEvent);
      this.newEventName = '';
    }
  }

  selectEvent(event: Event) {
    this.selectedEvent = event;
  }

  // TODO: Sid lets talk about these
}
