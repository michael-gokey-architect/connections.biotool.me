import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsLandingComponent } from './events-landing/events-landing.component';
import { CreateEventsComponent } from './create-events/create-events.component';
import { GetEventsComponent } from './get-events/get-events.component';
import { UpdateEventsComponent } from './update-events/update-events.component';
import { DeleteEventsComponent } from './delete-events/delete-events.component';



@NgModule({
  declarations: [
    EventsLandingComponent,
    CreateEventsComponent,
    GetEventsComponent,
    UpdateEventsComponent,
    DeleteEventsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventsModule { }
