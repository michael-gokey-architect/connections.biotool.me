import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteEventsComponent } from './delete-events/delete-events.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    DeleteEventsComponent
  ],
  imports: [
		CommonModule,
		ReactiveFormsModule
  ]
})
export class EventsModule { }
