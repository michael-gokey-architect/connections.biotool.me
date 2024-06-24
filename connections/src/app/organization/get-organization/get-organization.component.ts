import { Component } from '@angular/core';
import { Organization } from 'src/app/core/models/organization.interface';
import { OrganizationService } from 'src/app/core/services/organization.service';

@Component({
  selector: 'app-get-organization',
  templateUrl: './get-organization.component.html',
  styleUrls: ['./get-organization.component.css']
})
export class GetOrganizationComponent {

  organizations: Organization[] = [];

  constructor(private orgService: OrganizationService){
    
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
