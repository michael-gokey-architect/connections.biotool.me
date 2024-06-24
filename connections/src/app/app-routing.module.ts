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
import { DeleteOrganizationComponent } from './organization/delete-organization/delete-organization.component';
import { GetOrganizationComponent } from './organization/get-organization/get-organization.component';
import { EventsLandingComponent } from './events/events-landing/events-landing.component';
import { PageGray2Component } from './features/page-gray2/page-gray2.component';
import { UpdateOrganizationComponent } from './organization/update-organization/update-organization.component';

const routes: Routes = [
  { path: 'guest', component: GuestPublicLandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'connections', component: ConnectionCentralComponent },
  { path: 'quests', component:QuestRewardsPageComponent},
  { path: 'theme', component: ThemeSwitcherComponent },
  { path: 'gray', component: PageGrayComponent },
  { path: 'gray2', component: PageGray2Component },
  { path: 'blue', component: PageBlueComponent },
  { path: 'purple', component: PagePurpleComponent },
  { path: 'red', component: PageRedComponent },
  { path: 'events', component: EventsLandingComponent },  
  { path: 'organization', component: OrganizationLandingComponent },
  { path: 'get-organization', component: GetOrganizationComponent },
  { path: 'create-organization', component: CreateOrganizationComponent },
  { path: 'delete-organization', component: DeleteOrganizationComponent },
  { path: 'update-organization', component: UpdateOrganizationComponent },
  { path: '',  redirectTo: 'guest', pathMatch: 'full'},
  { path: "**", redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
