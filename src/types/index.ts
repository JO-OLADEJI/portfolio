import { COMMAND_LIST } from "../constants";

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

export type LogType = "command" | "error" | "response";

export type Command = (typeof COMMAND_LIST)[number];

export interface Log {
  type: LogType;
  literal: string;
}
