import { COMMAND_LIST } from "../constants";

export type Pages = "home" | "portfolio" | "contact" | "error";

export type ContactTab = "meeting" | "terminal" | "form" | "canvas";

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
export type TerminalNode = string | JSX.Element;

export type Command = (typeof COMMAND_LIST)[number];

export interface Log {
  type: LogType;
  literal: string | TerminalNode[];
}

export interface TerminalMessage {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}
