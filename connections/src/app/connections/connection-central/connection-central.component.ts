import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection-central',
  templateUrl: './connection-central.component.html',
  styleUrls: ['./connection-central.component.css'],
})
export class ConnectionCentralComponent {
  constructor(private router: Router) {}

  onGetConnection() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-connection');
  }

  onCreateConnection() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-connection');
  }

  onDeleteConnection() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-connection');
  }
  onUpdateConnection() {
    this.router.navigateByUrl('/update-connection');
  }
}
