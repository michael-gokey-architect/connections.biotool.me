import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestPublicLandingComponent } from './guest/guest-public-landing/guest-public-landing.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';
import { ConnectionCentralComponent } from './connections/connection-central/connection-central.component';
import { QuestRewardsPageComponent } from './quest/quest-rewards-page/quest-rewards-page.component';
import { ThemeSwitcherComponent } from './features/theme-switcher/theme-switcher.component';
import { PageRedComponent } from './features-epris/page-red/page-red.component';
import { PageBlueComponent } from './features-epris/page-blue/page-blue.component';
import { PagePurpleComponent } from './features-epris/page-purple/page-purple.component';
import { PageGrayComponent } from './features-epris/page-gray/page-gray.component';
import { OrganizationLandingComponent } from './organization/organization-landing/organization-landing.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { GetOrganizationComponent } from './organization/get-organization/get-organization.component';
import { UpdateOrganizationComponent } from './organization/update-organization/update-organization.component';
import { DeleteOrganizationComponent } from './organization/delete-organization/delete-organization.component';
import { EventsLandingComponent } from './events/events-landing/events-landing.component';
import { RoleLandingComponent } from './shared/roles/role-landing/role-landing.component';
import { LinksLandingComponent } from './shared/links/links-landing/links-landing.component';
import { PiiLandingComponent } from './shared/pii/pii-landing/pii-landing.component';
import { CreatePiiComponent } from './shared/pii/create-pii/create-pii.component';
import { GetPiiComponent } from './shared/pii/get-pii/get-pii.component';
import { UpdatePiiComponent } from './shared/pii/update-pii/update-pii.component';
import { DeletePiiComponent } from './shared/pii/delete-pii/delete-pii.component';
import { TagLandingComponent } from './shared/tags/tag-landing/tag-landing.component';
import { CrudComponent } from './features/crud/crud.component';
import { QrcodeGenerateComponent } from './features/qrcode-generate/qrcode-generate.component';

const routes: Routes = [
  { path: 'guest', component: GuestPublicLandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'connections', component: ConnectionCentralComponent },
  { path: 'quests', component:QuestRewardsPageComponent},
  { path: 'theme', component: ThemeSwitcherComponent },
  { path: 'gray', component: PageGrayComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'blue', component: PageBlueComponent },
  { path: 'purple', component: PagePurpleComponent },
  { path: 'red', component: PageRedComponent },
  { path: 'events', component: EventsLandingComponent },  
  { path: 'organization', component: OrganizationLandingComponent },
  { path: 'get-organization', component: GetOrganizationComponent },
  { path: 'create-organization', component: CreateOrganizationComponent },
  { path: 'delete-organization', component: DeleteOrganizationComponent },
  { path: 'update-organization', component: UpdateOrganizationComponent },
  { path: 'roles', component: RoleLandingComponent },
  { path: 'links', component: LinksLandingComponent }, 
  { path: 'tags', component: TagLandingComponent }, 
  { path: 'pii', component: PiiLandingComponent },  
  { path: 'get-pii', component: GetPiiComponent },
  { path: 'create-pii', component: CreatePiiComponent },
  { path: 'delete-pii', component: DeletePiiComponent },
  { path: 'update-pii', component: UpdatePiiComponent },
  { path: 'qrcode', component: QrcodeGenerateComponent }, 
  
  { path: '',  redirectTo: 'guest', pathMatch: 'full'},
  { path: "**", redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
