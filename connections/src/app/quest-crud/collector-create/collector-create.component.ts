import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectorService } from 'src/app/core/services/collector.service';


@Component({
  selector: 'app-collector-create',
  templateUrl: './collector-create.component.html',
  styleUrls: ['./collector-create.component.css']
})
export class CreateCollectorComponent {
  collector: FormGroup;
  collectorName: string | null = '';
  collectorDescription: string | null = '';

  constructor(private collectorService: CollectorService, private fb: FormBuilder) {
    this.collector = this.fb.group({
      name: [''],
      description:[''],
      latitude: [''],
      longitude: [''],
      trig: ['', Validators.required]
    });
  }

  createCollector(): void {
    if (this.collector.valid) {
      this.collectorService.createCollector(this.collector.value).subscribe({
        next: response => {
          this.collectorName = response.name
          this.collectorDescription = response.description;
          console.log('Collection created successfully:', response);
          this.collector.reset();
        },
        error: error => {
          console.error('Error adding collector:', error);
        }
      });
    }
  }

}
