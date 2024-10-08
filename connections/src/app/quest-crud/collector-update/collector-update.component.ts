import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectorService } from 'src/app/core/services/collector.service';

@Component({
  selector: 'app-collector-update',
  templateUrl: './collector-update.component.html',
  styleUrls: ['./collector-update.component.css']
})
export class CollectorUpdateComponent {
  collector: FormGroup;
  collectorName: string | null = '';
  collectorDescription: string | null = '';

  constructor(
    private collectorService: CollectorService, 
    private fb: FormBuilder
  ) {
    this.collector = this.fb.group({
      trigger_id: ['', Validators.required],
      name: [''],
      description:[''],
      latitude: [''],
      longitude: [''],
      trig: ['', Validators.required]
    });
  }

  createCollector(): void {
    if (this.collector.valid) {
      this.collectorService.updateCollector(this.collector.value).subscribe({
        next: response => {
          this.collectorName = response.name
          this.collectorDescription = response.description;
          console.log('Collection updated successfully:', response);
          this.collector.reset();
        },
        error: error => {
          console.error('Error updating collector:', error);
        }
      });
    }
  }
}
