import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { UserAvatarUploaderComponent } from './user-avatar-uploader/user-avatar-uploader.component';
import { ManageAliasComponent } from './manage-alias/manage-alias.component';



@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    FeatureLandingComponent,
    UserAvatarUploaderComponent,
    ManageAliasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
