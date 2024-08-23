import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestPublicLandingComponent } from './guest-public-landing/guest-public-landing.component';
import { UserBadgePanelComponent } from './user-badge-panel/user-badge-panel.component';
import { UserBioPanelComponent } from './user-bio-panel/user-bio-panel.component';
import { UserLinkPanelComponent } from './user-link-panel/user-link-panel.component';
import { SharedModule } from '../shared/shared.module';
import { SignComponent } from './sign/sign.component';



@NgModule({
  declarations: [
    GuestPublicLandingComponent,
    UserBadgePanelComponent,
    UserBioPanelComponent,
    UserLinkPanelComponent,
    SignComponent
  ],
  exports: [
    GuestPublicLandingComponent,
    UserBadgePanelComponent,
    UserBioPanelComponent,
    UserLinkPanelComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class GuestModule { }
