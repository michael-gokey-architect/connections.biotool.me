import { Component } from '@angular/core';
import { QrCodeGeneratorService } from '../../core/services/qr-code-generator.service'
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { SetDisabledStateOption } from '@angular/forms';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.css']
})
export class QrCodeGeneratorComponent {

  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'google.com';

  myQrCode: string = '';

  constructor() {
    // assign a value
    this.myQrCode = 'QR code data';
  }
  // TODO: Sid lets talk about this
}
