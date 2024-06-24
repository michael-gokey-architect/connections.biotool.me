import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlueComponent } from './page-blue/page-blue.component';
import { PagePurpleComponent } from './page-purple/page-purple.component';
import { PageRedComponent } from './page-red/page-red.component';
import { PageGrayComponent } from './page-gray/page-gray.component';



@NgModule({
  declarations: [
    PageBlueComponent,
    PagePurpleComponent,
    PageRedComponent,
    PageGrayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesEprisModule { }
