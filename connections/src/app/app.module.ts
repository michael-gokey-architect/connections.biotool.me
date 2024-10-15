import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GuestModule } from './guest/guest.module';
import { QuestModule } from './quest/quest.module';
import { HttpClientModule } from '@angular/common/http';
import { OrganizationModule } from './organization/organization.module';
import { EventsModule } from './events/events.module';
import { ConnectionsModule } from './connections/connections.module';
import { FeaturesModule } from './features/features.module';
import { OrganizationManagerComponent } from './event-management/organization-manager/organization-manager.component';
import { EventManagerComponent } from './event-management/event-manager/event-manager.component';
import { PanelistManagerComponent } from './event-management/panelist-manager/panelist-manager.component';
import { FormsModule } from '@angular/forms';
import { FeaturesMichaelModule } from './features-michael/features-michael.module';
import { QrCodeSaveComponent } from './qr-save-mock/qr-code-save/qr-code-save.component';
import { QrCodeDisplayComponent } from './qr-save-mock/qr-code-display/qr-code-display.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QrUserProfileComponent } from './qr-user-profile/qr-user-profile.component';
import { QRCodeModule } from 'angularx-qrcode';
import { ConnectionsCreateComponent } from './connections-crud/connections-create/connections-create.component';
import { ConnectionsGetComponent } from './connections-crud/connections-get/connections-get.component';
import { ConnectionsUpdateComponent } from './connections-crud/connections-update/connections-update.component';
import { ConnectionsRemoveComponent } from './connections-crud/connections-remove/connections-remove.component';
import { ConnectionsCrudLandingComponent } from './connections-crud/connections-crud-landing/connections-crud-landing.component';
import { EventsCreateComponent } from './events-crud/events-create/events-create.component';
import { EventsGetComponent } from './events-crud/events-get/events-get.component';
import { EventsUpdateComponent } from './events-crud/events-update/events-update.component';
import { EventsCrudLandingComponent } from './events-crud/events-crud-landing/events-crud-landing.component';
import { TicketsCreateComponent } from './tickets-crud/tickets-create/tickets-create.component';
import { TicketsUpdateComponent } from './tickets-crud/tickets-update/tickets-update.component';
import { TicketsGetComponent } from './tickets-crud/tickets-get/tickets-get.component';
import { TicketsCrudLandingComponent } from './tickets-crud/tickets-crud-landing/tickets-crud-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationManagerComponent,
    EventManagerComponent,
    PanelistManagerComponent,
    QrCodeSaveComponent,
    QrCodeDisplayComponent,
    QrUserProfileComponent,
    ConnectionsCreateComponent,
    ConnectionsGetComponent,
    ConnectionsUpdateComponent,
    ConnectionsRemoveComponent,
    ConnectionsCrudLandingComponent,
    EventsCreateComponent,
    EventsGetComponent,
    EventsUpdateComponent,
    EventsCrudLandingComponent,
    TicketsCreateComponent,
    TicketsUpdateComponent,
    TicketsGetComponent,
    TicketsCrudLandingComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    GuestModule,
    QuestModule,
		OrganizationModule,
		EventsModule,
		ConnectionsModule,
    AppRoutingModule,
    HttpClientModule,
    FeaturesModule,
    FormsModule,
    FeaturesMichaelModule,
    MaterialModule,
    BrowserAnimationsModule,
    QRCodeModule
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
    // Add CUSTOM_ELEMENTS_SCHEMA here for web based components 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
