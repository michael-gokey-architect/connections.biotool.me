import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-delete-events',
  templateUrl: './delete-events.component.html',
  styleUrls: ['./delete-events.component.css'],
})
export class DeleteEventsComponent {
  deleteForm!: FormGroup;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      eventId: ['', [Validators.required]],
    });
  }

  deleteEvent(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.eventId;
      this.eventService.deleteEvents(id).subscribe({
        next: (response) => {
          console.log('Event deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: (error) => {
          console.error('Error deleting event:', error);
        },
      });
    }
  }
}
