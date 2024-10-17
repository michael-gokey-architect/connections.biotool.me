import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestRewardService } from 'src/app/core/services/quest-reward.service';

@Component({
  selector: 'app-quest-reward-create',
  templateUrl: './quest-reward-create.component.html',
  styleUrls: ['./quest-reward-create.component.css']
})
export class QuestRewardCreateComponent {
  quest: FormGroup;
  journey: number | null = 0;

  constructor(private questRewardService: QuestRewardService, private fb: FormBuilder) {
    this.quest = this.fb.group({
      journey_id: ['', Validators.required],
      award_image:['']
    });
  }

  createQuestReward(): void {
    if (this.quest.valid) {
      this.questRewardService.createQuestReward(this.quest.value).subscribe({
        next: response => {
          this.journey = response.journey_id
          console.log('Quest Reward created successfully:', response);
          this.quest.reset();
        },
        error: error => {
          console.error('Error adding quest:', error);
        }
      });
    }
  }
}
