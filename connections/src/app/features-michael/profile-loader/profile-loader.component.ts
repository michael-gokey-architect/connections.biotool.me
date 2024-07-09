import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Links } from 'src/app/core/models/links';
import { LinksService } from 'src/app/core/services/links.service';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-profile-loader',
  templateUrl: './profile-loader.component.html',
  styleUrls: ['./profile-loader.component.css']
})
export class ProfileLoaderComponent {
  inputForm: FormGroup;
  bio: string;
  links: Links[] = [];

  constructor(private fb: FormBuilder, private piiService: PiiService, private linkService: LinksService){
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
    this.linkService.getLink(id).subscribe({
      next: response => {
        this.links = response;
        console.log('Links get successfully:', this.links);
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
