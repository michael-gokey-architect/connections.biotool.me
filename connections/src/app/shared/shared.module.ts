import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

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
    DeleteLinksComponent
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
		ReactiveFormsModule
  ]
})
export class SharedModule { }
