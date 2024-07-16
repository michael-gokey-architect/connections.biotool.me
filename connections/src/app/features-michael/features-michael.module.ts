import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComOneComponent } from './com-one/com-one.component';
import { ComTwoComponent } from './com-two/com-two.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { ProfileLoaderComponent } from './profile-loader/profile-loader.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ComOneComponent,
    ComTwoComponent,
    QrReaderComponent,
    ProfileLoaderComponent,
    ProfileDisplayComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FeaturesMichaelModule { }
