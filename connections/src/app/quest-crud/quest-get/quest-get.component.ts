import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Quest } from 'src/app/core/models/quest.interface';
import { QuestService } from 'src/app/core/services/quest.service';

@Component({
  selector: 'app-quest-get',
  templateUrl: './quest-get.component.html',
  styleUrls: ['./quest-get.component.css']
})
export class QuestGetComponent {
  getForm: FormGroup
  quest: Quest[] = [];

  constructor(
    private questService: QuestService, private fb: FormBuilder
  ) {
    this.getForm = this.fb.group({
      userId: ['', [Validators.required]]
    });
  }

  getQuests(): void {
    if (this.getForm.valid) {
      var id = this.getForm.value.userId
      this.questService.getQuest(id).subscribe({
        next: response => {
          this.quest.push(response)
          console.log('Collection get successfully:', response);
        },
        error: error => {
          console.error('Error getting collector:', error);
        }
      });
    }
  }
}
