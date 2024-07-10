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
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule } from '@angular/forms';
import { FeaturesMichaelModule } from './features-michael/features-michael.module';
import { QrCodeSaveComponent } from './qr-save-mock/qr-code-save/qr-code-save.component';
import { QrCodeDisplayComponent } from './qr-save-mock/qr-code-display/qr-code-display.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OrganizationManagerComponent,
    EventManagerComponent,
    PanelistManagerComponent,
    QrCodeSaveComponent,
    QrCodeDisplayComponent
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
    NgxQRCodeModule,
    FormsModule,
    FeaturesMichaelModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  
    // Add CUSTOM_ELEMENTS_SCHEMA here for web based components 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
