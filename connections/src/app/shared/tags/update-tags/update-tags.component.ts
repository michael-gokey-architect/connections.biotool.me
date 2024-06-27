import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagsService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-update-tags',
  templateUrl: './update-tags.component.html',
  styleUrls: ['./update-tags.component.css'],
})
export class UpdateTagsComponent {
  tagUpdatedForm: FormGroup;

  constructor(
    private tagService: TagsService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.tagUpdatedForm = this.fb.group({
      tag_id: ['', Validators.required],
      tag_header: [''],
      tag_description: [''],
      tag_notes: [''],
      tag_owner_type: [''],
      tag_owner: [''],
      display_tag: [''],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    event.preventDefault();

    console.log('Tag Updated Form Value', this.tagUpdatedForm.value);
    //use subscribe with next and error object as per new standard
    this.tagService
      .updateTag(this.tagUpdatedForm.value)
      .subscribe({
        next: (response) => {
          console.log('Updated Form submitted successfully:', response);
          this.tagUpdatedForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated Tag completed');
        },
      });
  }
}
