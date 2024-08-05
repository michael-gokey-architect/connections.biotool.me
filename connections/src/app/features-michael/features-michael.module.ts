import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComOneComponent } from './com-one/com-one.component';
import { ComTwoComponent } from './com-two/com-two.component';
import { QrReaderComponent } from './qr-reader/qr-reader.component';
import { ProfileLoaderComponent } from './profile-loader/profile-loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner'
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';

// Necessary to solve the problem of losing internet connection
LOAD_WASM().subscribe();

@NgModule({
  declarations: [
    ComOneComponent,
    ComTwoComponent,
    QrReaderComponent,
    ProfileLoaderComponent,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    NgxQRCodeModule,
    ZXingScannerModule,
    NgxScannerQrcodeModule
  ]
})
export class FeaturesMichaelModule { }
