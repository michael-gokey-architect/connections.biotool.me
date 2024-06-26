import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pii } from 'src/app/core/models/pii';
import { PiiService } from 'src/app/core/services/pii.service';

@Component({
  selector: 'app-get-pii',
  templateUrl: './get-pii.component.html',
  styleUrls: ['./get-pii.component.css']
})
export class GetPiiComponent {
  getForm: FormGroup;

  constructor(private piiService: PiiService, private fb: FormBuilder) {
    this.getForm = this.fb.group({
      userId: ['', [Validators.required]]
    });
  }

  getPii(): void {
    //get all Piis
    if (this.getForm.valid) {
      const id = this.getForm.value.userId;
      this.piiService.getUserPii(id).subscribe({
        next: response => {
          console.log('User pii get successfully:', response);
          this.getForm.reset();
        },
        error: error => {
          console.error('Error deleting pii:', error);
        }
      });
    }
  }

}
