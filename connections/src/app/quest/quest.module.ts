import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestBadgesPanelComponent } from './quest-badges-panel/quest-badges-panel.component';
import { QuestRewardsPageComponent } from './quest-rewards-page/quest-rewards-page.component';
import { QuestRewardsPanelComponent } from './quest-rewards-panel/quest-rewards-panel.component';
import { SharedModule } from '../shared/shared.module';
// import { QuestLandingComponent } from './quest-landing/quest-landing.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestBadgesPanelComponent,
    QuestRewardsPageComponent,
    QuestRewardsPanelComponent,
    // QuestLandingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    QuestBadgesPanelComponent,
    QuestRewardsPageComponent,
    QuestRewardsPanelComponent
  ]
})
export class QuestModule { }
