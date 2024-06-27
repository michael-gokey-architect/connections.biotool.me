import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolesService } from 'src/app/core/services/roles.service';

@Component({
  selector: 'app-create-roles',
  templateUrl: './create-roles.component.html',
  styleUrls: ['./create-roles.component.css'],
})
export class CreateRolesComponent {
  rolesForm: FormGroup;

  constructor(
    private orgService: RolesService,
    private fb: FormBuilder
  ) {
    //basic validators need to put check in UI
    this.rolesForm = this.fb.group({
      role_id: ['', Validators.required],
      role_type: [''],
      organization_id: ['', Validators.required],
      role_status: [''],
    });
  }

  onSubmit(event: Event): void {
    //keep validation check for form
    // if (this.rolesForm.valid) {
    event.preventDefault();

    console.log('Org Form Value', this.rolesForm.value);

    //create roles call
    //use subscribe with next and error object as per new standard
    this.orgService.createUserRole(this.rolesForm.value).subscribe({
      next: (response) => {
        console.log('Form submitted successfully:', response);
        this.rolesForm.reset();
      },
      error: (error) => {
        console.error('Error submitting form:', error);
      },
      complete: () => {
        console.log('Create Org completed');
      },
    });
  }
}
