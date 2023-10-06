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

export const MORNING = ["10:00", "10:30", "11:00", "11:30", "12:00"] as const;
export const EVENING = ["16:00", "16:30", "17:00", "17:30", "18:00"] as const;

export type MorningSchedule =
  | (typeof MORNING)[0]
  | (typeof MORNING)[1]
  | (typeof MORNING)[2]
  | (typeof MORNING)[3]
  | (typeof MORNING)[4];

export type EveningSchedule =
  | (typeof EVENING)[0]
  | (typeof EVENING)[1]
  | (typeof EVENING)[2]
  | (typeof EVENING)[3]
  | (typeof EVENING)[4];

export type Schedule = MorningSchedule | EveningSchedule;
