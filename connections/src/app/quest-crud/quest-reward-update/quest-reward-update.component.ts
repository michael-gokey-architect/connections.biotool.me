import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestRewardService } from 'src/app/core/services/quest-reward.service';

@Component({
  selector: 'app-quest-reward-update',
  templateUrl: './quest-reward-update.component.html',
  styleUrls: ['./quest-reward-update.component.css']
})
export class QuestRewardUpdateComponent {
  questReward: FormGroup;
  journeyId: number | null = 0;

  constructor(
    private questRewardService: QuestRewardService, 
    private fb: FormBuilder
  ) {
    this.questReward = this.fb.group({
      reward_id: ['', Validators.required],
      journey_id: ['', Validators.required],
      award_image:['']
    });
  }

  createQuestReward(): void {
    if (this.questReward.valid) {
      this.questRewardService.updateQuestReward(this.questReward.value).subscribe({
        next: response => {
          this.journeyId = response.journey_id
          console.log('Quest Reward updated successfully:', response);
          this.questReward.reset();
        },
        error: error => {
          console.error('Error updating quest reward:', error);
        }
      });
    }
  }
}
