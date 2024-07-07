import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComOneComponent } from './com-one/com-one.component';
import { ComTwoComponent } from './com-two/com-two.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { ProfileLoaderComponent } from './profile-loader/profile-loader.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';



@NgModule({
  declarations: [
    ComOneComponent,
    ComTwoComponent,
    QrReaderComponent,
    ProfileLoaderComponent,
    ProfileDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesMichaelModule { }
