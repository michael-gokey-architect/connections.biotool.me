import { Component, Input } from '@angular/core';
import { Panelist, Event } from '../org-sample';

@Component({
  selector: 'app-panelist-manager',
  templateUrl: './panelist-manager.component.html',
  styleUrls: ['./panelist-manager.component.css']
})
export class PanelistManagerComponent {
  @Input() event!: any ;
  newPanelistName: string = '';
  newEventDescription: string = '';

  addPanelist() {
    if (this.event) {
      const compactString = this.createCompactString(this.newPanelistName, this.newEventDescription);
      const newPanelist = {
        id: this.event.panelists.length + 1,
        name: this.newPanelistName,
        description: this.newEventDescription,
        qrData: compactString
      };
      this.event.panelists.push(newPanelist);
      this.newPanelistName = '';
      this.newEventDescription = '';
    }
  }

  createCompactString(name: string, description: string): string {
    // For simplicity, we're just concatenating the strings. You can implement any compacting algorithm you need.
    return `${name}:${description}`;
  }


  // TODO: Sid lets talk about these
}
