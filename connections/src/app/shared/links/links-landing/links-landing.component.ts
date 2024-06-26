import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links-landing',
  templateUrl: './links-landing.component.html',
  styleUrls: ['./links-landing.component.css']
})
export class LinksLandingComponent {
  constructor(private router: Router){
  }

  onGetLink() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-link')
  }

  onCreateLink() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-link')
  }

  onDeleteLink() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-link')
  }
  onUpdateLink() {
    this.router.navigateByUrl('/update-link')
  }
}
