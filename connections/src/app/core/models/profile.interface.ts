export interface Profile {
    user_id: number;
    username: string | null;
    first_name: string | null;
    middle_name: string | null;
    last_name: string | null;
    hashed_password: string | null;
    email: string | null;
    alternate_email: string | null;
    user_type_id: number | null;
    account_level_id: number | null;
    creation_date: string;
    
  