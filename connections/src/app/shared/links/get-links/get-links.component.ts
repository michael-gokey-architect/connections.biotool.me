import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Links } from 'src/app/core/models/links';
import { LinksService } from 'src/app/core/services/links.service';

@Component({
  selector: 'app-get-links',
  templateUrl: './get-links.component.html',
  styleUrls: ['./get-links.component.css']
})
export class GetLinksComponent {
  getForm: FormGroup;
  linksArray: Links[] = [];

  constructor(private linkService: LinksService, private fb: FormBuilder) {
    this.getForm = this.fb.group({
      userId: ['', [Validators.required]]
    });
  }

  getLink(): void {
    //get all LInks
    if (this.getForm.valid) {
      const id = this.getForm.value.userId;
      this.linkService.getLink(id).subscribe({
        next: response => {
          this.linksArray = response;
          console.log('link get successfully:', response);
          this.getForm.reset();
        },
        error: error => {
          console.error('Error getting link:', error);
        }
      });
    }
  }
}
