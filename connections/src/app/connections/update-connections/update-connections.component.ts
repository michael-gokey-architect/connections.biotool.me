import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-update-connections',
  templateUrl: './update-connections.component.html',
  styleUrls: ['./update-connections.component.css'],
})
export class UpdateConnectionsComponent {
  connectionUpdatedForm: FormGroup;

  constructor(
    private connService: ConnectionService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.connectionUpdatedForm = this.fb.group({
      connection_name: ['', Validators.required],
      user_id: ['', Validators.required],
      username: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      alternate_string: [''],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    event.preventDefault();

    console.log('Connection Updated Form Value', this.connectionUpdatedForm.value);
    //use subscribe with next and error object as per new standard
    this.connService
      .updateConnection(this.connectionUpdatedForm.value)
      .subscribe({
        next: (response) => {
          console.log('Updated Form submitted successfully:', response);
          this.connectionUpdatedForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated Connection completed');
        },
      });
  }
}
