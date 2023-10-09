export enum Pages {
  Home,
  About,
  Portfolio,
  Contact,
  Error404,
}

export interface ContactMediumProps {
  isActive: boolean;
}

export interface MeetingDay {
  timestamp: number; // day start (midnight) timestamp
  date: number;
  day: string;
  schedule: Date[];
}
