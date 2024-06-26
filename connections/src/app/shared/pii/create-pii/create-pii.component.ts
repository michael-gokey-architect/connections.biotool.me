import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-create-pii',
  templateUrl: './create-pii.component.html',
  styleUrls: ['./create-pii.component.css']
})
export class CreatePiiComponent {
  piiForm: FormGroup;

  constructor(private piiService: PiiService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.piiForm = this.fb.group({
      user_id: ['', Validators.required],
      date_of_birth: [''],
      gender: [''],
      marital_staus: [''],
      biography: ['']
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.piiform.valid) {
    event.preventDefault();

    console.log("Pii Form Value", this.piiForm.value);

    //create pii call 
    //use subscribe with next and error object as per new standard
    this.piiService.createUserPii(this.piiForm.value).subscribe({
      next: response => {
        console.log('Form submitted successfully:', response);
        this.piiForm.reset();
      },
      error: error => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Link completed');
      }
    });
  }
}
