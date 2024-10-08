import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CollectorService } from 'src/app/core/services/collector.service';


@Component({
  selector: 'app-get-collectors',
  templateUrl: './get-collectors.component.html',
  styleUrls: ['./get-collectors.component.css']
})
export class GetCollectorsComponent {
  collectorName: string[] = [];
  collectorDescription: string[] = [];

  constructor(
    private collectorService: CollectorService
  ) {
  }

  getCollectors(): void {
  
      this.collectorService.getAllCollectors().subscribe({
        next: response => {
          this.collectorName.push(response.name ? response.name : "");
          this.collectorDescription.push(response.description ? response.description : "")
          console.log('Collection get successfully:', response);
        },
        error: error => {
          console.error('Error getting collector:', error);
        }
      });
    }


  }

