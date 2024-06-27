import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-update-roles',
  templateUrl: './update-roles.component.html',
  styleUrls: ['./update-roles.component.css'],
})
export class UpdateRolesComponent {
  roleUpdatedForm: FormGroup;

  constructor(
    private roleService: RolesService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.roleUpdatedForm = this.fb.group({
      role_id: [''],
      role_type: ['', Validators.required],
      organization_id: [''],
      role_status: ['', Validators.required],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    event.preventDefault();

    console.log('Role Updated Form Value', this.roleUpdatedForm.value);
    //use subscribe with next and error object as per new standard
    this.roleService
      .updateUserRole(this.roleUpdatedForm.value)
      .subscribe({
        next: (response) => {
          console.log('Updated Form submitted successfully:', response);
          this.roleUpdatedForm.reset();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        },
        complete: () => {
          console.log('Updated Role completed');
        },
      });
  }
}
