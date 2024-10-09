import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quest-landing',
  templateUrl: './quest-landing.component.html',
  styleUrls: ['./quest-landing.component.css']
})
export class QuestLandingComponent {
  constructor(private router: Router){
  }

  onGetQuests() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-quests')
  }
  onCreateQuests() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-quests')
  }
  onUpdateQuests() {
    this.router.navigateByUrl('/update-quests')
  }
}
