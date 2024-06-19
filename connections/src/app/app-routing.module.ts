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

const routes: Routes = [
  { path: 'guest', component: GuestPublicLandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'connections', component: ConnectionCentralComponent },
  { path: 'quests', component:QuestRewardsPageComponent},
  { path: 'theme', component: ThemeSwitcherComponent },
  { path: 'gray', component: PageGrayComponent },
  { path: 'blue', component: PageBlueComponent },
  { path: 'purple', component: PagePurpleComponent },
  { path: 'red', component: PageRedComponent },
  { path: '',  redirectTo: 'guest', pathMatch: 'full'},
  { path: "**", redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
