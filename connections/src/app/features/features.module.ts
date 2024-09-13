import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { FeatureLandingComponent } from './feature-landing/feature-landing.component';
import { ManageAliasComponent } from './manage-alias/manage-alias.component';
import { CrudComponent } from './crud/crud.component';
import { QrCodeGeneratorComponent } from './qr-code-generator/qr-code-generator.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { QRCodeModule } from 'angularx-qrcode';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { ImageAvatarComponent } from './image-avatar/image-avatar.component';
import { ProfileImageComponent } from './profile-image/profile-image.component';
import { ProfileImageEditorComponent } from './profile-image-editor/profile-image-editor.component';


@NgModule({
  declarations: [
    ThemeSwitcherComponent,
    FeatureLandingComponent,
    ImageAvatarComponent,
    ManageAliasComponent,
    CrudComponent,
    QrCodeGeneratorComponent,
    ImageUploaderComponent,
    ImageAvatarComponent,
    ImageCropperComponent,
    ProfileImageComponent,
    ProfileImageEditorComponent,
  ],
  imports: [
		CommonModule,
    FormsModule,
    QRCodeModule,
    RouterModule,
		MaterialModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
    // Add CUSTOM_ELEMENTS_SCHEMA here for web based components 
  ],
})
export class FeaturesModule { }
