import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestPublicLandingComponent } from './guest/guest-public-landing/guest-public-landing.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';
import { ConnectionCentralComponent } from './connections/connection-central/connection-central.component';
import { CreateConnectionsComponent } from './connections/create-connections/create-connections.component';
import { GetConnectionsComponent } from './connections/get-connections/get-connections.component';
import { UpdateConnectionsComponent } from './connections/update-connections/update-connections.component';
import { DeleteConnectionsComponent } from './connections/delete-connections/delete-connections.component';
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
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { GetEventsComponent } from './events/get-events/get-events.component';
import { UpdateEventsComponent } from './events/update-events/update-events.component';
import { DeleteEventsComponent } from './events/delete-events/delete-events.component';
import { RoleLandingComponent } from './shared/roles/role-landing/role-landing.component';
import { CreateRolesComponent } from './shared/roles/create-roles/create-roles.component';
import { GetRolesComponent } from './shared/roles/get-roles/get-roles.component';
import { UpdateRolesComponent } from './shared/roles/update-roles/update-roles.component';
import { DeleteRolesComponent } from './shared/roles/delete-roles/delete-roles.component';
import { LinksLandingComponent } from './shared/links/links-landing/links-landing.component';
import { PiiLandingComponent } from './shared/pii/pii-landing/pii-landing.component';
import { CreatePiiComponent } from './shared/pii/create-pii/create-pii.component';
import { GetPiiComponent } from './shared/pii/get-pii/get-pii.component';
import { UpdatePiiComponent } from './shared/pii/update-pii/update-pii.component';
import { DeletePiiComponent } from './shared/pii/delete-pii/delete-pii.component';
import { TagLandingComponent } from './shared/tags/tag-landing/tag-landing.component';
import { CreateTagsComponent } from './shared/tags/create-tags/create-tags.component';
import { GetTagsComponent } from './shared/tags/get-tags/get-tags.component';
import { UpdateTagsComponent } from './shared/tags/update-tags/update-tags.component';
import { DeleteTagsComponent } from './shared/tags/delete-tags/delete-tags.component';
import { CrudComponent } from './features/crud/crud.component';
import { GetLinksComponent } from './shared/links/get-links/get-links.component';
import { CreateLinksComponent } from './shared/links/create-links/create-links.component';
import { DeleteLinksComponent } from './shared/links/delete-links/delete-links.component';
import { UpdateLinksComponent } from './shared/links/update-links/update-links.component';
import { TriggerLandingComponent } from './shared/trigger/trigger-landing/trigger-landing.component';
import { QrCodeGeneratorComponent } from './features/qr-code-generator/qr-code-generator.component';
import { OrganizationManagerComponent } from './event-management/organization-manager/organization-manager.component';
import { ProfileLoaderComponent } from './features-michael/profile-loader/profile-loader.component';
import { QrReaderComponent } from './features-michael/qr-reader/qr-reader.component';
import { QrCodeSaveComponent } from './qr-save-mock/qr-code-save/qr-code-save.component';
import { QrCodeDisplayComponent } from './qr-save-mock/qr-code-display/qr-code-display.component';
import { ImageUploaderComponent } from './features/image-uploader/image-uploader.component';
import { QrUserProfileComponent } from './qr-user-profile/qr-user-profile.component';
import { BadgeLandingComponent } from './quest/badge-landing/badge-landing.component';
import { CreateBadgeComponent } from './quest/create-badge/create-badge.component';
import { GetBadgeComponent } from './quest/get-badge/get-badge.component';
import { GetTriggerComponent } from './shared/trigger/get-trigger/get-trigger.component';
import { CreateTriggerComponent } from './shared/trigger/create-trigger/create-trigger.component';
import { ImageAvatarComponent } from './features/image-avatar/image-avatar.component';
import { ProfileImageComponent } from './features/profile-image/profile-image.component';
import { CollectorLandingComponent } from './shared/collector/collector-landing/collector-landing.component';
import { GetCollectorsComponent } from './shared/collector/get-collectors/get-collectors.component';
import { GetCollectorsByTridComponent } from './shared/collector/get-collectors-by-trid/get-collectors-by-trid.component';
import { CreateCollectorComponent } from './shared/collector/create-collector/create-collector.component';
import { UpdateCollectorComponent } from './shared/collector/update-collector/update-collector.component';

const routes: Routes = [
  { path: 'guest', component: GuestPublicLandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'connections', component: ConnectionCentralComponent },
  { path: 'get-connection', component: GetConnectionsComponent },
  { path: 'create-connection', component: CreateConnectionsComponent },
  { path: 'delete-connection', component: DeleteConnectionsComponent },
  { path: 'update-connection', component: UpdateConnectionsComponent },
  { path: 'quests', component: QuestRewardsPageComponent },
  { path: 'theme', component: ThemeSwitcherComponent },
  { path: 'gray', component: PageGrayComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'blue', component: PageBlueComponent },
  { path: 'purple', component: PagePurpleComponent },
  { path: 'red', component: PageRedComponent },
  { path: 'events', component: EventsLandingComponent },
  { path: 'get-event', component: GetEventsComponent },
  { path: 'create-event', component: CreateEventsComponent },
  { path: 'delete-event', component: DeleteEventsComponent },
  { path: 'update-event', component: UpdateEventsComponent },
  { path: 'organization', component: OrganizationLandingComponent },
  { path: 'get-organization', component: GetOrganizationComponent },
  { path: 'create-organization', component: CreateOrganizationComponent },
  { path: 'delete-organization', component: DeleteOrganizationComponent },
  { path: 'update-organization', component: UpdateOrganizationComponent },
  { path: 'get-link', component: GetLinksComponent },
  { path: 'create-link', component: CreateLinksComponent },
  { path: 'delete-link', component: DeleteLinksComponent },
  { path: 'update-link', component: UpdateLinksComponent },
  { path: 'roles', component: RoleLandingComponent },
  { path: 'get-role', component: GetRolesComponent },
  { path: 'create-role', component: CreateRolesComponent },
  { path: 'delete-role', component: DeleteRolesComponent },
  { path: 'update-role', component: UpdateRolesComponent },
  { path: 'links', component: LinksLandingComponent },
  { path: 'tags', component: TagLandingComponent },
  { path: 'get-tag', component: GetTagsComponent },
  { path: 'create-tag', component: CreateTagsComponent },
  { path: 'delete-tag', component: DeleteTagsComponent },
  { path: 'update-tag', component: UpdateTagsComponent },
  { path: 'pii', component: PiiLandingComponent },
  { path: 'get-pii', component: GetPiiComponent },
  { path: 'create-pii', component: CreatePiiComponent },
  { path: 'delete-pii', component: DeletePiiComponent },
  { path: 'update-pii', component: UpdatePiiComponent },
  // { path: 'quest', component: PiiLandingComponent },
  { path: 'collectors', component: CollectorLandingComponent},
  { path: 'get-all-collectors', component:GetCollectorsComponent},
  { path: 'get-trid-collectors', component:GetCollectorsByTridComponent},
  { path: 'create-collectors', component:CreateCollectorComponent},
  { path: 'update-collectors', component:UpdateCollectorComponent},

  { path: 'trigger', component: TriggerLandingComponent },
  { path: 'get-trigger', component: GetTriggerComponent },
  { path: 'create-trigger', component: CreateTriggerComponent },

  { path: 'qrcode', component: QrCodeGeneratorComponent },
  { path: 'org-event', component: OrganizationManagerComponent },
  { path: 'qrcode-reader', component: QrReaderComponent },
  { path: 'profile-loader', component: ProfileLoaderComponent },
  { path: 'qr-code-save', component: QrCodeSaveComponent },
  { path: 'qr-code-display', component: QrCodeDisplayComponent },
  {path: 'qr-user-profile', component: QrUserProfileComponent } , 
  { path: 'image-uploader', component: ImageUploaderComponent},
  { path: 'image-avatar', component: ImageAvatarComponent},
  { path: 'profile-image', component: ProfileImageComponent},
  { path: 'badge', component: BadgeLandingComponent},
  { path: 'create-badge', component: CreateBadgeComponent},
  { path: 'get-badge', component: GetBadgeComponent},
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
