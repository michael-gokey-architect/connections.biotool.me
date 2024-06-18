import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { UserAvatarUploaderComponent } from './user-avatar-uploader/user-avatar-uploader.component';
import { ManageAliasComponent } from './manage-alias/manage-alias.component';
import { PageRedComponent } from './page-red/page-red.component';
import { PageBlueComponent } from './page-blue/page-blue.component';
import { PagePurpleComponent } from './page-purple/page-purple.component';
import { PageGrayComponent } from './page-gray/page-gray.component';



@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    FeatureLandingComponent,
    UserAvatarUploaderComponent,
    ManageAliasComponent,
    PageRedComponent,
    PageBlueComponent,
    PagePurpleComponent,
    PageGrayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
