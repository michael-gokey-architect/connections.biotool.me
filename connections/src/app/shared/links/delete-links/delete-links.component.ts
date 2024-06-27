import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-delete-links',
  templateUrl: './delete-links.component.html',
  styleUrls: ['./delete-links.component.css']
})
export class DeleteLinksComponent {
  deleteForm!: FormGroup;

  constructor(private linkService: LinksService, private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      key_id: ['', [Validators.required]]
    });
  }

  deleteLink(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.key_id;
      this.linkService.deleteLink(id).subscribe({
        next: response => {
          console.log('Link deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: error => {
          console.error('Error deleting links:', error);
        }
      });
    }
  }
}
