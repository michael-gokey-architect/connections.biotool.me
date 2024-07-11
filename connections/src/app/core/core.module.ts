import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialsPipe } from './pipes/initials.pipe';



@NgModule({
  declarations: [
  
    InitialsPipe
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
