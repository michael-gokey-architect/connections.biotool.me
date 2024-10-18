import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-connections-remove',
  templateUrl: './connections-remove.component.html',
  styleUrls: ['./connections-remove.component.css']
})
export class ConnectionsRemoveComponent {
  deleteForm!: FormGroup;

  constructor(
    private connService: ConnectionService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      user_id: ['', [Validators.required]],
      follow_user_id: ['', [Validators.required]]
    });
  }

  deleteConnection(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.user_id;
      const followId = this.deleteForm.value.follow_user_id;
      this.connService.unfollowUser(id, followId).subscribe({
        next: (response) => {
          console.log('Connection deleted successfully:', response);
          this.deleteForm.reset();
        },
        error: (error) => {
          console.error('Error deleting connection:', error);
        },
      });
    }
  }
}
