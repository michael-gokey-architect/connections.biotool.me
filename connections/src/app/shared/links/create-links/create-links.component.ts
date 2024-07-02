import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-create-links',
  templateUrl: './create-links.component.html',
  styleUrls: ['./create-links.component.css']
})
export class CreateLinksComponent {
  linkForm: FormGroup;

  constructor(private linkService: LinksService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.linkForm = this.fb.group({
      user_id: ['', Validators.required],
      link_type: ['', Validators.required],
      link_active: ['', Validators.required],
      url_label: ['', Validators.required],
      url_link: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.piiform.valid) {
    event.preventDefault();

    console.log("Link Form Value", this.linkForm.value);

    //create pii call 
    //use subscribe with next and error object as per new standard
    this.linkService.createLink(this.linkForm.value).subscribe({
      next: response => {
        console.log('Form submitted successfully:', response);
        this.linkForm.reset();
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
