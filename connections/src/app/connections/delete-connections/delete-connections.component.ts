import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from 'src/app/core/services/connection.service';


@Component({
  selector: 'app-delete-connections',
  templateUrl: './delete-connections.component.html',
  styleUrls: ['./delete-connections.component.css'],
})
export class DeleteConnectionsComponent {
  deleteForm!: FormGroup;

  constructor(
    private connService: ConnectionService,
    private fb: FormBuilder
  ) {
    this.deleteForm = this.fb.group({
      connId: ['', [Validators.required]],
    });
  }

  deleteConnection(): void {
    if (this.deleteForm.valid) {
      const id = this.deleteForm.value.connId;
      this.connService.deleteConnections(id).subscribe({
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
