import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlueComponent } from './page-blue/page-blue.component';
import { PagePurpleComponent } from './page-purple/page-purple.component';
import { PageRedComponent } from './page-red/page-red.component';



@NgModule({
  declarations: [
    PageBlueComponent,
    PagePurpleComponent,
    PageRedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesEprisModule { }
