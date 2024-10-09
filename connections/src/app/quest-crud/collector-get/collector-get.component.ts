import { Component } from '@angular/core';
import { Collector } from 'src/app/core/models/collecter.interface';
import { CollectorService } from 'src/app/core/services/collector.service';

@Component({
  selector: 'app-collector-get',
  templateUrl: './collector-get.component.html',
  styleUrls: ['./collector-get.component.css']
})
export class CollectorGetComponent {
  collectors: Collector[] = [];

  constructor(
    private collectorService: CollectorService
  ) {
  }

  getCollectors(): void {
  
      this.collectorService.getAllCollectors().subscribe({
        next: response => {
          this.collectors = response
          console.log('Collection get successfully:', response);
        },
        error: error => {
          console.error('Error getting collector:', error);
        }
      });
    }

}
