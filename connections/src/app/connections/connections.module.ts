import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionCentralComponent } from './connection-central/connection-central.component';
import { SharedModule } from '../shared/shared.module';
import { GetConnectionsComponent } from './get-connections/get-connections.component';
import { CreateConnectionsComponent } from './create-connections/create-connections.component';
import { ConnectionCardComponent } from './connection-card/connection-card.component';
import { UpdateConnectionsComponent } from './update-connections/update-connections.component';
import { BlockConnectionsComponent } from './block-connections/block-connections.component';
import { RemoveConnectionsComponent } from './remove-connections/remove-connections.component';
import { GetGroupsComponent } from './get-groups/get-groups.component';
import { CreateGroupsComponent } from './create-groups/create-groups.component';
import { DeleteConnectionsComponent } from './delete-connections/delete-connections.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectionLandingComponent } from './connection-landing/connection-landing.component';



@NgModule({
  declarations: [
    ConnectionCentralComponent,
    GetConnectionsComponent,
    CreateConnectionsComponent,
    ConnectionCardComponent,
    UpdateConnectionsComponent,
    BlockConnectionsComponent,
    RemoveConnectionsComponent,
    GetGroupsComponent,
    CreateGroupsComponent,
    DeleteConnectionsComponent,
    ConnectionLandingComponent
  ],
  exports: [
    ConnectionCentralComponent
  ],
  imports: [
    CommonModule,
		SharedModule,
		ReactiveFormsModule
  ]
})
export class ConnectionsModule { }
