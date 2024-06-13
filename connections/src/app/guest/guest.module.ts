import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestPublicLandingComponent } from './guest-public-landing/guest-public-landing.component';
import { UserBadgePanelComponent } from './user-badge-panel/user-badge-panel.component';
import { UserBioPanelComponent } from './user-bio-panel/user-bio-panel.component';
import { UserLinkPanelComponent } from './user-link-panel/user-link-panel.component';



@NgModule({
  declarations: [
    GuestPublicLandingComponent,
    UserBadgePanelComponent,
    UserBioPanelComponent,
    UserLinkPanelComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GuestModule { }
