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
