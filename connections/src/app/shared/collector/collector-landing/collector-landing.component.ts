import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collector-landing',
  templateUrl: './collector-landing.component.html',
  styleUrls: ['./collector-landing.component.css']
})
export class CollectorLandingComponent {
  constructor(private router: Router){
  }

  onGetAllCollectors() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-all-collectors')
  }

  onGetTridCollectors() {
    //using router to navigate on same page
    this.router.navigateByUrl('/get-trid-collectors')
  }

  onCreateCollectors() {
    //using router to navigate on same page
    this.router.navigateByUrl('/create-collectors')
  }
  onUpdateCollectors() {
    this.router.navigateByUrl('/update-collectors')
  }

}


// Please move this component CRUD section, guts into the quest-crud module, into the proper files. and then removed this CRUD section
