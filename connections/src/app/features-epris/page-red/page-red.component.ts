import { Component } from '@angular/core';

@Component({
  selector: 'app-page-red',
  templateUrl: './page-red.component.html',
  styleUrls: ['./page-red.component.css'],
})
export class PageRedComponent {
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
