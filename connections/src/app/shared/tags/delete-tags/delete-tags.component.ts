import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TagsService } from 'src/app/core/services/tags.service';

@Component({
  selector: 'app-delete-tags',
  templateUrl: './delete-tags.component.html',
  styleUrls: ['./delete-tags.component.css'],
})
export class DeleteTagsComponent {
  deleteForm!: FormGroup;

  constructor(
    private tagService: TagsService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      tagId: ['', [Validators.required]],
    });
  }

  deleteTag(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.orgId;
      this.tagService.deleteTags(id).subscribe({
        next: (response) => {
          console.log('Tag deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: (error) => {
          console.error('Error deleting tag:', error);
        },
      });
    }
  }
}
