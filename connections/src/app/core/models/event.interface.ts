export interface Event {
  event_id: number;
  organization_id: number;
  event_name: string | null;
  description: string | null;
  start_date: Date | null;
  end_date: Date | null;
  venue_name: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  state_province: string | null;
  postal_code: string | null;
  country: string | null;
  email: string | null;
  phone_number: string | null;
  website: string | null;
  deleted_date: Date | null;
  journeys: [
    {
      journey_id: number;
      journey_name: string | null;
      event_id: number;
      journey_details: string | null;
      deleted_date: Date | null;
    }
  ];
}
