import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Badge } from 'src/app/core/models/badge.interface';
import { BadgeService } from 'src/app/core/services/badge.service';

@Component({
  selector: 'app-badge-get',
  templateUrl: './badge-get.component.html',
  styleUrls: ['./badge-get.component.css']
})
export class BadgeGetComponent {
  getForm: FormGroup;
  badges: Badge[] = [];

  constructor(private badgeService: BadgeService, private fb: FormBuilder) {
    this.getForm = this.fb.group({
      badge_id: ['', [Validators.required]]
    });
  }

  getBadge(): void {
    //get all LInks
    if (this.getForm.valid) {
      const id = this.getForm.value.badge_id;
      this.badgeService.getBadge(id).subscribe({
        next: response => {
          this.badges.push(response);
          console.log('badge get successfully:', response);
          this.getForm.reset();
        },
        error: error => {
          console.error('Error getting link:', error);
        }
      });
    }
  }
}
