import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/core/services/organization.service';

@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrls: ['./update-organization.component.css']
})
export class UpdateOrganizationComponent {
  organizationUpdatedForm: FormGroup;

  constructor(private orgService: OrganizationService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.organizationUpdatedForm = this.fb.group({
      organization_id: ['', Validators.required],
      organization_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      point_of_contact_name: ['', Validators.required],
      address_line1: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
      event.preventDefault();

      console.log("Org Updated Form Value", this.organizationUpdatedForm.value);
      //use subscribe with next and error object as per new standard
      this.orgService.updateOrganization(this.organizationUpdatedForm.value).subscribe({
        next: response => {
          console.log('Updated Form submitted successfully:', response);
          this.organizationUpdatedForm.reset();
        },
        error: error => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated Org completed');
        }
      });
  }

}
