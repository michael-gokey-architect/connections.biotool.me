import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';

@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css'],
})
export class CreateEventsComponent {
  eventForm: FormGroup;

  constructor(
    private eventService: EventService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.eventForm = this.fb.group({
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
    // if (this.eventForm.valid) {
    event.preventDefault();

    console.log('Event Form Value', this.eventForm.value);

    //create event call
    //use subscribe with next and error object as per new standard
    this.eventService.createEvent(this.eventForm.value).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.eventForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Event completed');
      },
    });
  }
}
