import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connections-crud-landing',
  templateUrl: './connections-crud-landing.component.html',
  styleUrls: ['./connections-crud-landing.component.css']
})
export class ConnectionsCrudLandingComponent {
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
