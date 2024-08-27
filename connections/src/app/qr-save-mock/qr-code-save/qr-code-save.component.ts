import html2canvas from 'html2canvas';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as QRCode from 'qrcode'
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { QRCodeElementType } from 'angularx-qrcode';
@Component({
  selector: 'app-qr-code-save',
  templateUrl: './qr-code-save.component.html',
  styleUrls: ['./qr-code-save.component.css']
})
export class QrCodeSaveComponent {

  // urlHandle: string = '';
  qrData: string | null = null;
  caption: string = '';
  format: QRCodeElementType = 'img';  // Set default to 'img' (PNG)

  constructor(private router: Router, private http: HttpClient) {}

  generateQrCode() {
    // const urlHandle = `https://${this.urlHandle}/`;
    this.qrData = `${this.caption}`;
    console.log(this.qrData)
    setTimeout(() => this.captureQrCode(), 100); // Wait for QR code to render
  }

  captureQrCode() {
    const qrElement = document.getElementById('qrCodeWithCaption');
    if (qrElement) {
      // Create a temporary container to hold the QR code and caption
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.top = '-9999px';
      tempContainer.style.left = '-9999px';
      tempContainer.style.padding = '5px';
      tempContainer.style.backgroundColor = 'white'; // To ensure the background is white
    
      // Clone the QR code element and caption into the container
      const clonedQrElement = qrElement.cloneNode(true);
      // const captionElement = document.createElement('div');
      // captionElement.innerText = this.caption; // Replace with your caption
      // captionElement.style.marginTop = '10px';
      // captionElement.style.textAlign = 'center';
    
      tempContainer.appendChild(clonedQrElement);
      // tempContainer.appendChild(captionElement);
      document.body.appendChild(tempContainer);
    
      // Use html2canvas to capture the temporary container
      html2canvas(tempContainer).then(canvas => {
        canvas.toBlob(blob => {
          if (blob) { // Check if blob is not null
            const formData = new FormData();
            formData.append('image', blob, 'qr-code.png');
            // formData.append('caption', this.caption);
            this.saveQrCode(formData);
          } else {
            console.error('Failed to create Blob from canvas');
          }
    
          // Clean up: Remove the temporary container from the DOM
          document.body.removeChild(tempContainer);
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

  // Handles the user interaction to download the QR code.
  // It bacquires the data URL of the QR code, creates a 
  // temporary download link, and simulates a click to download the file.

  downloadQRCode() {
    const qrElement = document.querySelector('qrcode img, qrcode svg') as HTMLElement;

    if (!qrElement) {
      alert('QR Code is not generated yet.');
      return;
    }

    const dataUrl = this.format === 'img' ? (qrElement as HTMLImageElement).src : this.getSVGDataUrl(qrElement);

    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `qr-code.${this.format === 'img' ? 'png' : 'svg'}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // Converts the SVG QR code into a Base64-encoded data URL that can be used for downloading.

  // An XMLSerializer object is created, which can convert an XML or SVG DOM tree into a string representation.
  // serializeToString(svgElement) converts the SVG element (which is a part of the DOM) into a string of XML markup.

  getSVGDataUrl(svgElement: HTMLElement): string {
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    return 'data:image/svg+xml;base64,' + btoa(svgString);
  }

}
