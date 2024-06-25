import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { UserAvatarUploaderComponent } from './user-avatar-uploader/user-avatar-uploader.component';
import { ManageAliasComponent } from './manage-alias/manage-alias.component';
import { CrudComponent } from './crud/crud.component';
import { QrcodeGenerateComponent } from './qrcode-generate/qrcode-generate.component';



@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    FeatureLandingComponent,
    UserAvatarUploaderComponent,
    ManageAliasComponent,
    CrudComponent,
    QrcodeGenerateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
