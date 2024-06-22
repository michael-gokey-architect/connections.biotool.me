import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrganizationService } from 'src/app/core/services/organization.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent {
  organizationForm: FormGroup;

  constructor(private orgService: OrganizationService, private fb: FormBuilder) {
    //basic validators need to put check in UI
    this.organizationForm = this.fb.group({
      organization_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      point_of_contact_name: ['', Validators.required],
      address_line1: ['', Validators.required]
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.organizationForm.valid) {
    event.preventDefault();

    console.log("Org Form Value", this.organizationForm.value);

    //create organization call 
    //use subscribe with next and error object as per new standard
    this.orgService.createOrganization(this.organizationForm.value).subscribe({
      next: response => {
        console.log('Form submitted successfully:', response);
        this.organizationForm.reset();
      },
      error: error => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Org completed');
      }
    });
  }

}
