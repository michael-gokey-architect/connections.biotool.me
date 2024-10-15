import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollectorService } from 'src/app/core/services/collector.service';


@Component({
  selector: 'app-get-collectors-by-trid',
  templateUrl: './get-collectors-by-trid.component.html',
  styleUrls: ['./get-collectors-by-trid.component.css']
})
export class GetCollectorsByTridComponent {
  collector: FormGroup;
  collectorName: string | null = '';
  collectorDescription: string | null = '';

  constructor(private collectorService: CollectorService, private fb: FormBuilder) {
    this.collector = this.fb.group({
      trid: ['', Validators.required]
    });
  }

  // getCollector(): void {
  //   if (this.collector.valid) {
  //     this.collectorService.getCollectorByTrid(this.collector.value).subscribe({
  //       next: response => {
  //         this.collectorName = response.name
  //         this.collectorDescription = response.description;
  //         console.log('Collection get successfully:', response);
  //         this.collector.reset();
  //       },
  //       error: error => {
  //         console.error('Error getting collector:', error);
  //       }
  //     });
  //   }
  // }

}
