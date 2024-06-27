export interface Roles {
  role_id: number;
  role_type: string | null;
  organization_id: number;
  role_status: string | null;
  creation_date: string;
  last_update_date: string | null;
  last_update_by: number | null;
  deleted_date: string | null;
}
