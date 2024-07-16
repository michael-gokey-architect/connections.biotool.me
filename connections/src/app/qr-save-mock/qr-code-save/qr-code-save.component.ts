import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as QRCode from 'qrcode'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qr-code-save',
  templateUrl: './qr-code-save.component.html',
  styleUrls: ['./qr-code-save.component.css']
})
export class QrCodeSaveComponent {

  instagramHandle: string = '';
  qrData: string | null = null;
  caption: string = '';
  qrCodeImage: string | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  generateQrCode() {
    const instagramUrl = `https://www.instagram.com/${this.instagramHandle}/`;
    this.qrData = instagramUrl;
    setTimeout(() => this.captureQrCode(), 100); // Wait for QR code to render
  }

  captureQrCode() {
    const qrElement = document.getElementById('qrCodeWithCaption');
    if (qrElement) {
      html2canvas(qrElement).then(canvas => {
        canvas.toBlob(blob => {
          if (blob) { // Check if blob is not null
            const formData = new FormData();
            formData.append('image', blob, 'qr-code.png');
            formData.append('caption', this.caption);
            this.saveQrCode(formData);
          } else {
            console.error('Failed to create Blob from canvas');
          }
        }, 'image/png');
      });
    }
  }

  saveQrCode(formData: FormData) {
    this.http.post('http://localhost:3000/save-qr-code', formData)
      .subscribe({
        next: (response) => {
          console.log('QR code saved successfully', response);
        },
        error: (error) => {
          console.error('Error saving QR code:', error);
        }
      });
  }

  goToDisplayQR(){
    this.router.navigateByUrl('/qr-code-display')
  }
}
