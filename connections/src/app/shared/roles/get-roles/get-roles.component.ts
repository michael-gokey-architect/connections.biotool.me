import { Component } from '@angular/core';
import { Roles } from 'src/app/core/models/roles.interface';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-get-roles',
  templateUrl: './get-roles.component.html',
  styleUrls: ['./get-roles.component.css'],
})
export class GetRolesComponent {
  roles: Roles[] = [];

  constructor(private orgService: RolesService) {}

  ngOnInit(): void {
    //get all roles
    this.orgService.getUserRoles().subscribe({
      next: (data) => {
        this.roles = data;
        console.log('Roles:', this.roles);
      },
      error: (error) => {
        console.error('Error fetching roles:', error);
      },
      complete: () => {
        console.log('Request to fetch Org completed');
      },
    });
  }
}
