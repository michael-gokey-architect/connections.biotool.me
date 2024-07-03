export interface Organization {
    id: number;
    name: string;
    events: Event[];
  }
  
  export interface Event {
    id: number;
    name: string;
    panelists: Panelist[];
  }
  
  export interface Panelist {
    id: number;
    name: string;
    description: string;
    qrData?: string;
  }
  