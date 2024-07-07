import { Component } from '@angular/core';
import { Organization, Event } from '../org-sample';

@Component({
  selector: 'app-organization-manager',
  templateUrl: './organization-manager.component.html',
  styleUrls: ['./organization-manager.component.css']
})
export class OrganizationManagerComponent {
  newOrgName: string = '';
  organizations: Organization[] = [];
  selectedOrganization: Organization | null = null;

  addOrganization() {
    const newOrg: any = {
      id: this.organizations.length + 1,
      name: this.newOrgName,
      events: []
    };
    this.organizations.push(newOrg);
    this.newOrgName = '';
  }

  selectOrganization(org: any) {
    this.selectedOrganization = org;
  }


  // TODO: Sid lets talk about these
}
