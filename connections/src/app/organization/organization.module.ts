import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLandingComponent } from './organization-landing/organization-landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { DeleteOrganizationComponent } from './delete-organization/delete-organization.component';
import { GetOrganizationComponent } from './get-organization/get-organization.component';
import { UpdateOrganizationComponent } from './update-organization/update-organization.component';



@NgModule({
  declarations: [
    OrganizationLandingComponent,
    CreateOrganizationComponent,
    DeleteOrganizationComponent,
    GetOrganizationComponent,
    UpdateOrganizationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class OrganizationModule { }
