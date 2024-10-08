import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectorService } from 'src/app/core/services/collector.service';


@Component({
  selector: 'app-update-collector',
  templateUrl: './update-collector.component.html',
  styleUrls: ['./update-collector.component.css']
})
export class UpdateCollectorComponent {
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
      trid: ['', Validators.required]
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
