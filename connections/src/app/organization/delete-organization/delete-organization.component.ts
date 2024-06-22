import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/core/services/organization.service';
@Component({
  selector: 'app-delete-organization',
  templateUrl: './delete-organization.component.html',
  styleUrls: ['./delete-organization.component.css']
})
export class DeleteOrganizationComponent {

  deleteForm!: FormGroup;

  constructor(private orgService: OrganizationService, private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      orgId: ['', [Validators.required]]
    });
  }

  deleteOrganization(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.orgId;
      this.orgService.deleteOrganizations(id).subscribe({
        next: response => {
          console.log('Organization deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: error => {
          console.error('Error deleting organization:', error);
        }
      });
    }
  }
}
