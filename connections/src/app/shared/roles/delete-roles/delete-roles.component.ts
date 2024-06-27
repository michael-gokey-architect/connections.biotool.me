import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-delete-roles',
  templateUrl: './delete-roles.component.html',
  styleUrls: ['./delete-roles.component.css'],
})
export class DeleteRolesComponent {
  deleteForm!: FormGroup;

  constructor(
    private orgService: RolesService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      roleId: ['', [Validators.required]],
    });
  }

  deleteRole(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.orgId;
      this.orgService.deleteUserRoles(id).subscribe({
        next: (response) => {
          console.log('Role deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: (error) => {
          console.error('Error deleting role:', error);
        },
      });
    }
  }
}
