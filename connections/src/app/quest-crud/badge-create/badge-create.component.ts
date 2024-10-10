import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BadgeService } from 'src/app/core/services/badge.service';

@Component({
  selector: 'app-badge-create',
  templateUrl: './badge-create.component.html',
  styleUrls: ['./badge-create.component.css']
})
export class BadgeCreateComponent {
  badgeForm : FormGroup;

  constructor(private badgeService: BadgeService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.badgeForm = this.fb.group({
      badge_name: [''],
      badge_description: [''],
      small_image_color: [''],
      small_image_greyscale: [''],
      big_image: [''],
      org_id: ['', Validators.required]
    });
  }


  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.piiform.valid) {
    event.preventDefault();

    console.log("Badge Form Value", this.badgeForm.value);

    //create pii call 
    //use subscribe with next and error object as per new standard
    this.badgeService.createBadge(this.badgeForm.value).subscribe({
      next: response => {
        console.log('Form submitted successfully:', response);
        this.badgeForm.reset();
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
