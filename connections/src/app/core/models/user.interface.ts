import { Links } from "./links";
import { Organization } from "./organization.interface";
import { Roles } from "./roles.interface";
import { Tags } from "./tags.interface";

export interface User {
    user_id: number,
    username: string | null,
    first_name: string | null,
    middle_name: string | null,
    last_name: string | null,
    hashed_password: string | null,
    email: string | null,
    alternate_email: string | null,
    user_type_id: number | null,
    account_level_id: number | null,
    creation_date: string,
    last_update_date: string | null,
    deleted_date: string | null,
    profile_pics: string | null,
    social_media_links: Links[] | null,
    user_selected_tags: Tags[] | null,
    roles: Roles[] | null,
    org: Organization | null

}
