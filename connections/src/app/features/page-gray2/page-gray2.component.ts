import { Component, ViewEncapsulation } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-page-gray2',
  templateUrl: './page-gray2.component.html',
  styleUrls: ['./page-gray2.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PageGray2Component {
  userFullName = 'John Bianchi';

  constructor(private router: Router){
  }


  
  onCreateOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/organization')
  }

  onEvents() {
    //using router to navigate on same page
    this.router.navigateByUrl('/events')
  }
  onConnections() {
    //using router to navigate on same page
    this.router.navigateByUrl('/connections')
  }

 


}
