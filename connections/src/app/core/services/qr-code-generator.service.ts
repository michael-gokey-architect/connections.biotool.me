import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrCodeGeneratorService {

  constructor() { }

  
  generateQrCode(data: string): string {
    // Simulate an endpoint that returns a QR code URL
    // In a real application, you would make an HTTP request to your backend here
    return `https://api.com/v1/create-qr-code/?data=${encodeURIComponent(data)}`;
  }
}
