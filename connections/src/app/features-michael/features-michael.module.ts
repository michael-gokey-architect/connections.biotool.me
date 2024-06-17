import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComOneComponent } from './com-one/com-one.component';
import { ComTwoComponent } from './com-two/com-two.component';



@NgModule({
  declarations: [
    ComOneComponent,
    ComTwoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesMichaelModule { }
