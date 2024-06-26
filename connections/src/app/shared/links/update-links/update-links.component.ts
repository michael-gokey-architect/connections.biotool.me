import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-update-links',
  templateUrl: './update-links.component.html',
  styleUrls: ['./update-links.component.css']
})
export class UpdateLinksComponent {
  linkForm: FormGroup;

  constructor(private linkService: LinksService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.linkForm = this.fb.group({
      user_id: ['', Validators.required],
      link_type: ['', Validators.required],
      link_active: ['', Validators.required],
      url_link: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.linkform.valid) {
    event.preventDefault();

    console.log("Link Form Value", this.linkForm.value);

    //create link call 
    //use subscribe with next and error object as per new standard
    this.linkService.updateLink(this.linkForm.value).subscribe({
      next: response => {
        console.log('Form upated successfully:', response);
        this.linkForm.reset();
      },
      error: error => {
        console.error('Error updating form:', error);
      },
      complete: () => {
        console.log('Update link completed');
      }
    });
  }
}
