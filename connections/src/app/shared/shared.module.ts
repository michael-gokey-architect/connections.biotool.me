import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    DeleteTagsComponent
  ],
  exports: [  
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent,
    PageErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
