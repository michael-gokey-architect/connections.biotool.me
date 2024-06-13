import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionCentralComponent } from './connection-central/connection-central.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ConnectionCentralComponent
  ],
  exports: [
    ConnectionCentralComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ConnectionsModule { }
