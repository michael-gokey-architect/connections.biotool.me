import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestReward } from 'src/app/core/models/quest-reward.interface';
import { QuestRewardService } from 'src/app/core/services/quest-reward.service';

@Component({
  selector: 'app-quest-reward-get',
  templateUrl: './quest-reward-get.component.html',
  styleUrls: ['./quest-reward-get.component.css']
})
export class QuestRewardGetComponent {
  getForm: FormGroup
  questReward: QuestReward[] = [];

  constructor(
    private questRewardService: QuestRewardService, private fb: FormBuilder
  ) {
    this.getForm = this.fb.group({
      rewardId: ['', [Validators.required]]
    });
  }

  getQuestsReward(): void {
    if (this.getForm.valid) {
      var id = this.getForm.value.rewardId
      this.questRewardService.getQuestReward(id).subscribe({
        next: response => {
          this.questReward.push(response)
          console.log('Reward get successfully:', response);
        },
        error: error => {
          console.error('Error getting reward:', error);
        }
      });
    }
  }
}
