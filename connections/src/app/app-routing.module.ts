import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestPublicLandingComponent } from './guest/guest-public-landing/guest-public-landing.component';
import { PageNotFoundComponent } from './shared/layout/page-not-found/page-not-found.component';
import { ConnectionsCreateComponent } from './connections-crud/connections-create/connections-create.component';
import { ConnectionsGetComponent } from './connections-crud/connections-get/connections-get.component';
import { ConnectionsRemoveComponent } from './connections-crud/connections-remove/connections-remove.component';
import { ConnectionsUpdateComponent } from './connections-crud/connections-update/connections-update.component';
import { ConnectionsCrudLandingComponent } from './connections-crud/connections-crud-landing/connections-crud-landing.component';
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
import { EventsCrudLandingComponent } from './events-crud/events-crud-landing/events-crud-landing.component';
import { EventsCreateComponent } from './events-crud/events-create/events-create.component';
import { EventsGetComponent } from './events-crud/events-get/events-get.component';
import { EventsUpdateComponent } from './events-crud/events-update/events-update.component';
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
import { QrCodeGeneratorComponent } from './features/qr-code-generator/qr-code-generator.component';
import { OrganizationManagerComponent } from './event-management/organization-manager/organization-manager.component';
import { ProfileLoaderComponent } from './features-michael/profile-loader/profile-loader.component';
import { QrReaderComponent } from './features-michael/qr-reader/qr-reader.component';
import { QrCodeSaveComponent } from './qr-save-mock/qr-code-save/qr-code-save.component';
import { QrCodeDisplayComponent } from './qr-save-mock/qr-code-display/qr-code-display.component';
import { ImageUploaderComponent } from './features/image-uploader/image-uploader.component';
import { QrUserProfileComponent } from './qr-user-profile/qr-user-profile.component';
import { BadgeLandingComponent } from './quest-crud/badge-landing/badge-landing.component';
import { BadgeCreateComponent } from './quest-crud/badge-create/badge-create.component';
import { BadgeGetComponent } from './quest-crud/badge-get/badge-get.component';
import { ImageAvatarComponent } from './features/image-avatar/image-avatar.component';
import { ProfileImageComponent } from './features/profile-image/profile-image.component';
import { CollectorLandingComponent } from './quest-crud/collector-landing/collector-landing.component';
import { CollectorGetComponent } from './quest-crud/collector-get/collector-get.component';
import { GetCollectorsByTridComponent } from './quest-crud/get-collectors-by-trid/get-collectors-by-trid.component';
import { CreateCollectorComponent } from './quest-crud/collector-create/collector-create.component';
import { CollectorUpdateComponent } from './quest-crud/collector-update/collector-update.component';
import { QuestGetComponent } from './quest-crud/quest-get/quest-get.component';
import { QuestCreateComponent } from './quest-crud/quest-create/quest-create.component';
import { QuestUpdateComponent } from './quest-crud/quest-update/quest-update.component';
import { QuestLandingComponent } from './quest-crud/quest-landing/quest-landing.component';
import { QuestRewardGetComponent } from './quest-crud/quest-reward-get/quest-reward-get.component';
import { QuestRewardCreateComponent } from './quest-crud/quest-reward-create/quest-reward-create.component';
import { QuestRewardLandingComponent } from './quest-crud/quest-reward-landing/quest-reward-landing.component';
import { QuestRewardUpdateComponent } from './quest-crud/quest-reward-update/quest-reward-update.component';

const routes: Routes = [
  { path: 'guest', component: GuestPublicLandingComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'connections', component: ConnectionsCrudLandingComponent },
  { path: 'get-connection', component: ConnectionsGetComponent },
  { path: 'create-connection', component: ConnectionsCreateComponent },
  { path: 'delete-connection', component: ConnectionsRemoveComponent },
  { path: 'update-connection', component: ConnectionsUpdateComponent },
  { path: 'quests', component: QuestRewardsPageComponent },
  { path: 'theme', component: ThemeSwitcherComponent },
  { path: 'gray', component: PageGrayComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'blue', component: PageBlueComponent },
  { path: 'purple', component: PagePurpleComponent },
  { path: 'red', component: PageRedComponent },
  { path: 'events', component: EventsCrudLandingComponent },
  { path: 'get-event', component: EventsGetComponent },
  { path: 'create-event', component: EventsCreateComponent },
  { path: 'delete-event', component: DeleteEventsComponent },
  { path: 'update-event', component: EventsUpdateComponent },
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
  { path: 'get-all-collectors', component:CollectorGetComponent},
  { path: 'get-trid-collectors', component:GetCollectorsByTridComponent},
  { path: 'create-collectors', component:CreateCollectorComponent},
  { path: 'update-collectors', component:CollectorUpdateComponent},
  { path: 'quests', component: QuestLandingComponent},
  { path: 'get-quests', component: QuestGetComponent},
  { path: 'create-quests', component: QuestCreateComponent},
  { path: 'update-quests', component: QuestUpdateComponent},
  { path: 'quest-rewards', component: QuestRewardLandingComponent},
  { path: 'create-quests-rewards', component: QuestRewardCreateComponent},
  { path: 'get-quests-rewards', component: QuestRewardGetComponent},
  { path: 'update-quests-rewards', component: QuestRewardUpdateComponent},


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
  { path: 'create-badge', component: BadgeCreateComponent},
  { path: 'get-badge', component: BadgeGetComponent},
  { path: '', redirectTo: 'guest', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
