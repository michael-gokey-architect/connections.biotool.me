import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organization-landing',
  templateUrl: './organization-landing.component.html',
  styleUrls: ['./organization-landing.component.css']
})
export class OrganizationLandingComponent {

  constructor(private router: Router){
  }

  onGetOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-organization')
  }

  onCreateOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-organization')
  }

  onDeleteOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-organization')
  }
}
