import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeLandingComponent } from './badge-landing/badge-landing.component';
import { BadgeCreateComponent } from './badge-create/badge-create.component';
import { BadgeUpdateComponent } from './badge-update/badge-update.component';
import { BadgeGetComponent } from './badge-get/badge-get.component';
import { QuestLandingComponent } from './quest-landing/quest-landing.component';
import { QuestCreateComponent } from './quest-create/quest-create.component';
import { QuestUpdateComponent } from './quest-update/quest-update.component';
import { QuestGetComponent } from './quest-get/quest-get.component';
import { CollectorLandingComponent } from './collector-landing/collector-landing.component';
import { CreateCollectorComponent } from './collector-create/collector-create.component';
import { CollectorUpdateComponent } from './collector-update/collector-update.component';
import { CollectorGetComponent } from './collector-get/collector-get.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetCollectorsByTridComponent } from './get-collectors-by-trid/get-collectors-by-trid.component';


@NgModule({
  declarations: [
    BadgeLandingComponent,
    BadgeCreateComponent,
    BadgeUpdateComponent,
    BadgeGetComponent,
    QuestLandingComponent,
    QuestCreateComponent,
    QuestUpdateComponent,
    QuestGetComponent,
    CollectorLandingComponent,
    CreateCollectorComponent,
    GetCollectorsByTridComponent,
    CollectorUpdateComponent,
    CollectorGetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuestCrudModule { }
