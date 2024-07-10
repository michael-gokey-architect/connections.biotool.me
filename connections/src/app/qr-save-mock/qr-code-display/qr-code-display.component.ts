import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-code-display',
  templateUrl: './qr-code-display.component.html',
  styleUrls: ['./qr-code-display.component.css']
})
export class QrCodeDisplayComponent implements OnInit {
  qrCodes: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.loadQrCodes();
  }

  loadQrCodes() {
    this.http.get<any[]>('http://localhost:3000/get-qr-codes')
      .subscribe(response => {
        this.qrCodes = response;
      });
  }

  goToGenerateQR(){
    this.router.navigateByUrl('/qr-code-save')
  }
}
