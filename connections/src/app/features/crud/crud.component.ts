import { Component, ViewEncapsulation } from '@angular/core';
import { Router  } from '@angular/router';
import { ConnectionService } from 'src/app/core/services/connection.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CrudComponent {
  userFullName = 'John Bianchi';
  userBio =
    'Lorem ipsum dolor sit amet, consectetur Caramels are umm. Vivamus nec tincidunt urna, sed feugiat metus. mollis eget nunc. Integer eu metus ut lectus luctus tempor. Donec sed nisl pretium, porttitor risus eu, lobortis leo. Nullam laoreet vulputate magna sit amet laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus iaculis imperdiet ex, sit amet molestie justo mollis eu. Aenean volutpat diam dui, vitae interdum mi placerat eget. Curabitur at nibh a sem faucibus accumsan. Nullam elementum, risus nec finibus iaculis, erat orci vehicula est, quis fringilla justo tellus vitae metus.';
  envName!: string;
	theme: string = localStorage.getItem('theme') || '';
	selected: string = '';

  constructor(private router: Router, private connection: ConnectionService) {
    this.envName = this.connection.getEnvironment();
  }

  ngOnInit() {
		if (this.theme) {
			document.body.dataset['theme'] = this.theme;
			this.selected = this.theme
		}

		if (!this.theme) {
			localStorage.setItem('theme', 'grey');
			this.selected = 'grey';
			document.body.dataset['theme'] = 'grey';
		}
	}
	
	updateTheme(value: string) {
    localStorage.setItem('theme', value);
    this.theme = value;
    document.body.dataset['theme'] = value;
	}

  onCreateOrganization() {
    //using router to navigate on same page
    this.router.navigateByUrl('/organization');
  }

  onEvents() {
    //using router to navigate on same page
    this.router.navigateByUrl('/events');
  }
  onConnections() {
    //using router to navigate on same page
    this.router.navigateByUrl('/connections');
  }

  onLinks() {
    //using router to navigate on same page
    this.router.navigateByUrl('/links');
  }
  onTags() {
    //using router to navigate on same page
    this.router.navigateByUrl('/tags');
  }
  onRoles() {
    //using router to navigate on same page
    this.router.navigateByUrl('/roles');
  }
  onPii() {
    //using router to navigate on same page
    this.router.navigateByUrl('/pii');
  }
  onQuest() {
    //using router to navigate on same page
    this.router.navigateByUrl('/quest');
  }
  onTrigger() {
    //using router to navigate on same page
    this.router.navigateByUrl('/trigger');
  }
  onJourney() {
    //using router to navigate on same page
    this.router.navigateByUrl('/journey');
  }
  onQRCode() {
    //using router to navigate on same page
    this.router.navigateByUrl('/qrcode');
  }
  onQR_Code_Reader() {
    //using router to navigate on same page
    this.router.navigateByUrl('/qrcode-reader');
  }
  onProfile_Loader() {
    //using router to navigate on same page
    this.router.navigateByUrl('/profile-loader');
  }
  onProfile_Reader() {
    //using router to navigate on same page
    this.router.navigateByUrl('/profile-reader');
  }
}


// Lorem ipsum dolor sit amet, consectetur Caramels are umm. Vivamus nec tincidunt urna, sed feugiat metus. mollis eget nunc. Integer eu metus ut lectus luctus tempor. Donec sed nisl pretium, porttitor risus eu, lobortis leo. Nullam laoreet vulputate magna sit amet laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus iaculis imperdiet ex, sit amet molestie justo mollis eu. Aenean volutpat diam dui, vitae interdum mi placerat eget. Curabitur at nibh a sem faucibus accumsan. Nullam elementum, risus nec finibus iaculis, erat orci vehicula est, quis fringilla justo tellus vitae metus.