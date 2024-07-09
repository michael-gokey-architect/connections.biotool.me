import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
  styleUrls: ['./profile-loader.component.css']
})
export class ProfileLoaderComponent {
  inputForm: FormGroup;
  bio: string;

  constructor(private fb: FormBuilder, private piiService: PiiService,){
    this.inputForm = this.fb.group({
      userId: ['', Validators.required]
    });
    this.bio = '';
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.piiform.valid) {
    event.preventDefault();

    console.log("User Id Value", this.inputForm.value);
    const id = this.inputForm.value.userId;
    this.piiService.getUserPii(id).subscribe({
      next: response => {
        this.bio = response.biography;
        console.log('Bio get successfully:', this.bio);
        this.inputForm.reset();
      },
      error: error => {
        console.error('Error:', error);
      }
    })

    //create pii call 
    //use subscribe with next and error object as per new standard
    
  }
}
