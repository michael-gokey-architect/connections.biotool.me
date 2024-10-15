import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { PageErrorComponent } from './layout/page-error/page-error.component';
import { RoleLandingComponent } from './roles/role-landing/role-landing.component';
import { GetRolesComponent } from './roles/get-roles/get-roles.component';
import { CreateRolesComponent } from './roles/create-roles/create-roles.component';
import { UpdateRolesComponent } from './roles/update-roles/update-roles.component';
import { DeleteRolesComponent } from './roles/delete-roles/delete-roles.component';
import { TagLandingComponent } from './tags/tag-landing/tag-landing.component';
import { GetTagsComponent } from './tags/get-tags/get-tags.component';
import { CreateTagsComponent } from './tags/create-tags/create-tags.component';
import { UpdateTagsComponent } from './tags/update-tags/update-tags.component';
import { DeleteTagsComponent } from './tags/delete-tags/delete-tags.component';
import { PiiLandingComponent } from './pii/pii-landing/pii-landing.component';
import { GetPiiComponent } from './pii/get-pii/get-pii.component';
import { CreatePiiComponent } from './pii/create-pii/create-pii.component';
import { DeletePiiComponent } from './pii/delete-pii/delete-pii.component';
import { UpdatePiiComponent } from './pii/update-pii/update-pii.component';
import { LinksLandingComponent } from './links/links-landing/links-landing.component';
import { GetLinksComponent } from './links/get-links/get-links.component';
import { CreateLinksComponent } from './links/create-links/create-links.component';
import { UpdateLinksComponent } from './links/update-links/update-links.component';
import { DeleteLinksComponent } from './links/delete-links/delete-links.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeLandingComponent } from '../quest-crud/badge-landing/badge-landing.component';
import { CreateCollectorComponent } from '../quest-crud/collector-create/collector-create.component';
import { CollectorGetComponent } from '../quest-crud/collector-get/collector-get.component';
import { CollectorLandingComponent } from '../quest-crud/collector-landing/collector-landing.component';
// import { GetCollectorsByTridComponent } from './collector/get-collectors-by-trid/get-collectors-by-trid.component';
import { CollectorUpdateComponent } from '../quest-crud/collector-update/collector-update.component';
import { QuestLandingComponent } from '../quest-crud/quest-landing/quest-landing.component';
import { QuestCreateComponent } from '../quest-crud/quest-create/quest-create.component';
import { QuestGetComponent } from '../quest-crud/quest-get/quest-get.component';
import { QuestUpdateComponent } from '../quest-crud/quest-update/quest-update.component';
import { BadgeCreateComponent } from '../quest-crud/badge-create/badge-create.component';
import { BadgeGetComponent } from '../quest-crud/badge-get/badge-get.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PageErrorComponent,
    RoleLandingComponent,
    GetRolesComponent,
    CreateRolesComponent,
    UpdateRolesComponent,
    DeleteRolesComponent,
    TagLandingComponent,
    GetTagsComponent,
    CreateTagsComponent,
    UpdateTagsComponent,
    DeleteTagsComponent,
    PiiLandingComponent,
    GetPiiComponent,
    CreatePiiComponent,
    DeletePiiComponent,
    UpdatePiiComponent,
    LinksLandingComponent,
    GetLinksComponent,
    CreateLinksComponent,
    UpdateLinksComponent,
    DeleteLinksComponent,
    CollectorLandingComponent,
    CollectorGetComponent,
    // GetCollectorsByTridComponent,
    CreateCollectorComponent,
    CollectorUpdateComponent,
    BadgeLandingComponent,
    QuestLandingComponent,
    QuestCreateComponent,
    QuestGetComponent,
    QuestUpdateComponent,
    BadgeCreateComponent,
    BadgeGetComponent
  ],
  exports: [  
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
		RouterModule,
		ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
