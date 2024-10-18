import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-connections-create',
  templateUrl: './connections-create.component.html',
  styleUrls: ['./connections-create.component.css']
})
export class ConnectionsCreateComponent {
  connectionForm: FormGroup;

  constructor(
    private connService: ConnectionService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.connectionForm = this.fb.group({
      user_id: ['', Validators.required],
      follow_user_id: ['', Validators.required],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.connectionForm.valid) {
    event.preventDefault();

    console.log('Conn Form Value', this.connectionForm.value);

    //create connection call
    //use subscribe with next and error object as per new standard
    this.connService.followUser(this.connectionForm.get('user_id')?.value, this.connectionForm.get('follow_user_id')?.value).subscribe({
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
