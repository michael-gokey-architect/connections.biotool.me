import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css'],
})
export class UpdateEventsComponent {
  eventUpdatedForm: FormGroup;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.eventUpdatedForm = this.fb.group({
      event_id: ['', Validators.required],
      organization_id: ['', Validators.required],
      event_name: [''],
      description: [''],
      start_date: [''],
      end_date: [''],
      venue_name: [''],
      address_line1: [''],
      address_line2: [''],
      city: [''],
      state_province: [''],
      postal_code: [''],
      country: [''],
      email: [''],
      phone_number: [''],
      website: [''],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    event.preventDefault();

    console.log('Event Updated Form Value', this.eventUpdatedForm.value);
    //use subscribe with next and error object as per new standard
    this.eventService
      .updateEvent(this.eventUpdatedForm.value)
      .subscribe({
        next: (response) => {
          console.log('Updated Form submitted successfully:', response);
          this.eventUpdatedForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated Event completed');
        },
      });
  }
}
