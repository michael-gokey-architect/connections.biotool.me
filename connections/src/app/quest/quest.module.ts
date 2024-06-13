import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestBadgesPanelComponent } from './quest-badges-panel/quest-badges-panel.component';
import { QuestRewardsPageComponent } from './quest-rewards-page/quest-rewards-page.component';
import { QuestRewardsPanelComponent } from './quest-rewards-panel/quest-rewards-panel.component';



@NgModule({
  declarations: [
    QuestBadgesPanelComponent,
    QuestRewardsPageComponent,
    QuestRewardsPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuestModule { }
