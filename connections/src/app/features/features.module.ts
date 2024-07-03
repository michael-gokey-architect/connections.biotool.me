import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { UserAvatarUploaderComponent } from './user-avatar-uploader/user-avatar-uploader.component';
import { ManageAliasComponent } from './manage-alias/manage-alias.component';
import { CrudComponent } from './crud/crud.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    FeatureLandingComponent,
    UserAvatarUploaderComponent,
    ManageAliasComponent,
    CrudComponent,
    QrCodeGeneratorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
    QRCodeModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
    // Add CUSTOM_ELEMENTS_SCHEMA here for web based components 
  ],
})
export class FeaturesModule { }
