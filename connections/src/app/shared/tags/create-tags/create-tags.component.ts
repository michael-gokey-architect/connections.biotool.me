import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagsService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-create-tags',
  templateUrl: './create-tags.component.html',
  styleUrls: ['./create-tags.component.css'],
})
export class CreateTagsComponent {
  tagForm: FormGroup;

  constructor(
    private tagService: TagsService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.tagForm = this.fb.group({
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
    // if (this.tagForm.valid) {
    event.preventDefault();

    console.log('Tag Form Value', this.tagForm.value);

    //create tag call
    //use subscribe with next and error object as per new standard
    this.tagService.createTag(this.tagForm.value).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.tagForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Tag completed');
      },
    });
  }
}
