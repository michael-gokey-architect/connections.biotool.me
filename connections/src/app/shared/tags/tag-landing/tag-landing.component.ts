import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-landing',
  templateUrl: './tag-landing.component.html',
  styleUrls: ['./tag-landing.component.css'],
})
export class TagLandingComponent {
  constructor(private router: Router) {}

  onGetTag() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-tag');
  }

  onCreateTag() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-tag');
  }

  onDeleteTag() {
    //using router to navigate on same page
    this.router.navigateByUrl('/delete-tag');
  }
  onUpdateTag() {
    this.router.navigateByUrl('/update-tag');
  }
}
