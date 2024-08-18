import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestBadgesPanelComponent } from './quest-badges-panel/quest-badges-panel.component';
import { QuestRewardsPageComponent } from './quest-rewards-page/quest-rewards-page.component';
import { QuestRewardsPanelComponent } from './quest-rewards-panel/quest-rewards-panel.component';
import { SharedModule } from '../shared/shared.module';
// import { QuestLandingComponent } from './quest-landing/quest-landing.component';
import { GetBadgeComponent } from './get-badge/get-badge.component';
import { CreateBadgeComponent } from './create-badge/create-badge.component';
import { DeleteBadgeComponent } from './delete-badge/delete-badge.component';
import { UpdateBadgeComponent } from './update-badge/update-badge.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    QuestBadgesPanelComponent,
    QuestRewardsPageComponent,
    QuestRewardsPanelComponent,
    // QuestLandingComponent,
    GetBadgeComponent,
    CreateBadgeComponent,
    DeleteBadgeComponent,
    UpdateBadgeComponent
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
