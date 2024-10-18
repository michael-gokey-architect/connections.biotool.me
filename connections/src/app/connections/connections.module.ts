import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionCentralComponent } from './connection-central/connection-central.component';
import { SharedModule } from '../shared/shared.module';
import { ConnectionCardComponent } from './connection-card/connection-card.component';
import { BlockConnectionsComponent } from './block-connections/block-connections.component';
import { GetGroupsComponent } from './get-groups/get-groups.component';
import { CreateGroupsComponent } from './create-groups/create-groups.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConnectionCentralComponent,
    ConnectionCardComponent,
    BlockConnectionsComponent,
    GetGroupsComponent,
    CreateGroupsComponent,
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
