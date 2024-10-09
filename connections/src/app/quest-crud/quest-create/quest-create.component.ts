import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestService } from 'src/app/core/services/quest.service';

@Component({
  selector: 'app-quest-create',
  templateUrl: './quest-create.component.html',
  styleUrls: ['./quest-create.component.css']
})
export class QuestCreateComponent {
  quest: FormGroup;
  journeyName: string | null = '';

  constructor(private questService: QuestService, private fb: FormBuilder) {
    this.quest = this.fb.group({
      journey_name: [''],
      event_id:[''],
      journey_details: [''],
      joid: ['', Validators.required]
    });
  }

  createQuest(): void {
    if (this.quest.valid) {
      this.questService.createQuest(this.quest.value).subscribe({
        next: response => {
          this.journeyName = response.journey_name
          console.log('Quest created successfully:', response);
          this.quest.reset();
        },
        error: error => {
          console.error('Error adding quest:', error);
        }
      });
    }
  }
}
