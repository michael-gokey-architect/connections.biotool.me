import { Component } from '@angular/core';
import { Connection } from 'src/app/core/models/connection.interface';
import { ConnectionService } from 'src/app/core/services/connection.service';

@Component({
  selector: 'app-get-connections',
  templateUrl: './get-connections.component.html',
  styleUrls: ['./get-connections.component.css'],
})
export class GetConnectionsComponent {
  connections: Connection[] = [];

  constructor(private connService: ConnectionService) {}

  ngOnInit(): void {
    //get all connections
    this.connService.getConnections().subscribe({
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
