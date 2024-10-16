import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Connection, user_connections } from 'src/app/core/models/connection.interface';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-connections-get',
  templateUrl: './connections-get.component.html',
  styleUrls: ['./connections-get.component.css']
})
export class ConnectionsGetComponent {
  connectionForm: FormGroup
  connections: user_connections[] = []

  constructor(private connService: ConnectionService, private fb: FormBuilder) { 
    this.connectionForm = this.fb.group({
    user_id: ['', Validators.required]
    
  })}


  onSubmit(event: Event): void {
    //get all connections
    const id = this.connectionForm.value.user_id;
    this.connService.getFollowsConnections(id).subscribe({
      next: (data) => {
        this.connections = data;
        console.log('Connections:', this.connections);
      },
      error: (error) => {
        console.error('Error fetching connections:', error);
      },
      complete: () => {
        console.log('Request to fetch Connection completed');
      },
    });
  }
}
