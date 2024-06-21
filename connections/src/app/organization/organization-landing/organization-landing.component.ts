import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Organization } from 'src/app/core/models/organization.interface';
import { OrganizationService } from 'src/app/core/services/organization.service';
@Component({
  selector: 'app-organization-landing',
  templateUrl: './organization-landing.component.html',
  styleUrls: ['./organization-landing.component.css']
})
export class OrganizationLandingComponent implements OnInit {

  organizationForm: FormGroup;
  organizations: Organization[] = [];

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
      },
      error: error => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Org completed');
      }
    });
  }

  ngOnInit(): void {
    //get all organizations
    this.orgService.getOrganizations().subscribe({
      next: data => {
        this.organizations = data;
        console.log('Organizations:', this.organizations);
      },
      error: error => {
        console.error('Error fetching organizations:', error);
      },
      complete: () => {
        console.log('Request to fetch Org completed');
      }
    });
  }
}
