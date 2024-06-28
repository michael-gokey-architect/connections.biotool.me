import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-create-connections',
  templateUrl: './create-connections.component.html',
  styleUrls: ['./create-connections.component.css'],
})
export class CreateConnectionsComponent {
  connectionForm: FormGroup;

  constructor(
    private connService: ConnectionService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.connectionForm = this.fb.group({
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
    // if (this.connectionForm.valid) {
    event.preventDefault();

    console.log('Conn Form Value', this.connectionForm.value);

    //create connection call
    //use subscribe with next and error object as per new standard
    this.connService.createConnection(this.connectionForm.value).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.connectionForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Conn completed');
      },
    });
  }
}
