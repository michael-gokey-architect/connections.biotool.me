import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-delete-pii',
  templateUrl: './delete-pii.component.html',
  styleUrls: ['./delete-pii.component.css']
})
export class DeletePiiComponent {

  deleteForm!: FormGroup;

  constructor(private piiService: PiiService, private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      userId: ['', [Validators.required]]
    });
  }

  deletePii(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.userId;
      this.piiService.deleteUserPii(id).subscribe({
        next: response => {
          console.log('User pii deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: error => {
          console.error('Error getting piis:', error);
        }
      });
    }
  }
}
