import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestService } from 'src/app/core/services/quest.service';

@Component({
  selector: 'app-quest-update',
  templateUrl: './quest-update.component.html',
  styleUrls: ['./quest-update.component.css']
})
export class QuestUpdateComponent {
  quest: FormGroup;
  journeyName: string | null = '';

  constructor(private questService: QuestService, private fb: FormBuilder) {
    this.quest = this.fb.group({
      journey_id: ['', Validators.required],
      journey_name: [''],
      event_id:[''],
      journey_details: [''],
      joid: ['', Validators.required]
    });
  }

  updateQuest(): void {
    if (this.quest.valid) {
      this.questService.updateQuest(this.quest.value).subscribe({
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
