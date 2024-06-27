import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-update-pii',
  templateUrl: './update-pii.component.html',
  styleUrls: ['./update-pii.component.css']
})
export class UpdatePiiComponent {
  piiUpdatedForm: FormGroup;

  constructor(private piiService: PiiService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.piiUpdatedForm = this.fb.group({
      user_id: ['', Validators.required],
      date_of_birth: [''],
      gender: [''],
      marital_status: [''],
      biography: ['']
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
      event.preventDefault();

      console.log("Pii Form Value", this.piiUpdatedForm.value);
      //use subscribe with next and error object as per new standard
      this.piiService.updateUserPii(this.piiUpdatedForm.value).subscribe({
        next: response => {
          console.log('Updated Form submitted successfully:', response);
          this.piiUpdatedForm.reset();
        },
        error: error => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated pii completed');
        }
      });
  }
}
