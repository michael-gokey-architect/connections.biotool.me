import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-purple',
  templateUrl: './page-purple.component.html',
  styleUrls: ['./page-purple.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PagePurpleComponent {
  userFullName = 'John Bianchi';

  onLinkedInClick() {
    window.open('https://www.linkedin.com/in/bianchijohn/', '_blank');
  }
  onPatchWRKClick() {
    window.open('https://www.circlepass.io/patchwrq', '_blank');
  }
  onQuestAppClick() {
    window.open('https://www.circlepass.io/quest', '_blank');
  }
}
