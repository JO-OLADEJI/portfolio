import type { TerminalMessage, Command } from "../types";

export const MEETING_TIME = {
  "10:00": 10 * 60 * 60 * 1000,
  "10:30": 10.5 * 60 * 60 * 1000,
  "11:00": 11 * 60 * 60 * 1000,
  "11:30": 11.5 * 60 * 60 * 1000,
  "12:00": 12 * 60 * 60 * 1000,
};

export const COMMAND_LIST = [
  "code",
  "decode",
  "memo config",
  "graph",
  "help",
  "clear",
] as const;

export const NEW_TERMINAL_MESSAGE: TerminalMessage = {
  name: "",
  email: "",
  message: "",
};

export const CMD_RULE: { [key in Command]: RegExp } = {
  code: new RegExp(/code \w+\.txt/),
  decode: new RegExp(/decode \w+\.txt/),
  "memo config": new RegExp(/memo config guest.\w+ = "[\w\s,.@!?]+"/),
  graph: new RegExp(/graph \w+\.txt/),
  help: new RegExp(/help/),
  clear: new RegExp(/clear/),
};
