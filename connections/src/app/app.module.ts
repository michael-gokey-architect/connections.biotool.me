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

@NgModule({
  declarations: [
    AppComponent
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
    FeaturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
