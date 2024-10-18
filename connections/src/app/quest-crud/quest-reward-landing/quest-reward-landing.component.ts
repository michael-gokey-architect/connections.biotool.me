import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest-reward-landing',
  templateUrl: './quest-reward-landing.component.html',
  styleUrls: ['./quest-reward-landing.component.css']
})
export class QuestRewardLandingComponent {
  constructor(private router: Router){
  }

  onGetQuestsRewards() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-quests-rewards')
  }
  onCreateQuestsRewards() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-quests-rewards')
  }
  onUpdateQuestsRewards() {
    this.router.navigateByUrl('/update-quests-rewards')
  }
}
