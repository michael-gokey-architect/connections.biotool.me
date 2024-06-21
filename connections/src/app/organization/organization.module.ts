import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationLandingComponent } from './organization-landing/organization-landing.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrganizationLandingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ]
})
export class OrganizationModule { }
