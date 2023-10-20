import React, { useState, useEffect, useCallback, useRef } from "react";
import Joi from "joi";

// components
import { CommandLog, ResponseLog, ErrorLog } from "./Logs";

// types, constants, utils
import { Command, ContactMediumProps, Log, TerminalMessage } from "../types";
import { COMMAND_LIST, NEW_TERMINAL_MESSAGE, CMD_RULE } from "../constants";
import { getHelpResponse } from "../utils/terminal";

// styles
import {
  Outline,
  Interface,
  CmdInput,
  NewLine,
} from "../styles/components/terminal";

const Terminal = ({ isActive }: ContactMediumProps): JSX.Element => {
  const TERMINAL_PROMPT = "guest@thecodeographer.com ~ % ";
  const [sessionTimeIn, setSessionTimeIn] = useState<Date>();
  const [commandLiteral, setCommandLiteral] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [commandHistoryIndex, setCommandHistoryIndex] = useState<number>(0);
  const [terminalLogs, setTerminalLogs] = useState<Log[]>([]);
  const [terminalFiles, setTerminalFiles] = useState<{
    [key: string]: TerminalMessage;
  }>({});
  const [activeFile, setActiveFile] = useState<string>("");
  const defaultCmdInput = useRef<HTMLTextAreaElement>(null);

  const executeCommand = useCallback(
    (command: Command, payload: string | undefined): Log | undefined => {
      const CMD_RESPONSE: Log = { type: "response", literal: "" };
      const CMD_ERROR: Log = { type: "error", literal: "" };
      const DEFAULT_ERROR: Log = {
        type: "error",
        literal: "invalid command syntax :/",
      };

      if (!CMD_RULE[command].test(`${command} ${payload ?? ""}`))
        return DEFAULT_ERROR;

      switch (command) {
        case "code":
          const storedFiles = { ...terminalFiles };
          if (payload) {
            if (terminalFiles[payload]) {
              CMD_ERROR.literal = `file already exists. writing to '${payload}'`;
              setActiveFile(payload);
              return CMD_ERROR;
            } else {
              storedFiles[payload] = NEW_TERMINAL_MESSAGE;
              setTerminalFiles(() => storedFiles);
              CMD_RESPONSE.literal = `created file. writing to '${payload}'`;
              setActiveFile(payload);
              return CMD_RESPONSE;
            }
          }
          break;

        case "decode":
          if (payload) {
            CMD_ERROR.literal = !terminalFiles[payload]
              ? `file "${payload}" does not exist`
              : JSON.stringify(terminalFiles[payload]);
            return CMD_ERROR;
          }
          break;

        case "memo config":
          if (!activeFile) {
            CMD_ERROR.literal =
              "no files found. create a new file using the `code` command.";
            return CMD_ERROR;
          }

          const keyExtract = commandLiteral
            .trim()
            .match(new RegExp(/guest.\w+/));
          const valueExtract = commandLiteral
            .trim()
            .match(new RegExp(/"[\w\s,.@!?]+"/));

          if (keyExtract && valueExtract && activeFile) {
            const key = keyExtract[0].replace("guest.", "");
            const value = valueExtract[0].replace(/"/g, "");
            const storedFiles = { ...terminalFiles };
            storedFiles[activeFile] = {
              ...storedFiles[activeFile],
              [key]: value,
            };

            setTerminalFiles(() => storedFiles);
            CMD_RESPONSE.literal = "";
            return CMD_RESPONSE;
          }
          break;

        case "graph":
          if (payload) {
            if (!terminalFiles[payload]) {
              CMD_ERROR.literal = `file '${payload}' not found.`;
              return CMD_ERROR;
            }

            const { value, error } = Joi.object({
              name: Joi.string().min(2).required(),
              email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
              message: Joi.string().min(5).max(300).required(),
            })
              .unknown(true)
              .validate(terminalFiles[payload]);
            if (error) {
              CMD_ERROR.literal = `cdgsh - error: ${error.details[0].message}`;
              return CMD_ERROR;
            }

            // TODO: hit api endpoint to send request
            // TODO: implement command-line loader
            CMD_RESPONSE.literal = "posting memo . . .";
            console.log(value);
            return CMD_RESPONSE;
          }
          break;

        case "help":
          if (payload) return DEFAULT_ERROR;
          CMD_RESPONSE.literal = getHelpResponse();
          return CMD_RESPONSE;

        case "clear":
          if (payload) return DEFAULT_ERROR;
          return;

        default:
          break;
      }

      return DEFAULT_ERROR;
    },
    [terminalFiles, commandLiteral, activeFile]
  );

  const handleTerminalActions = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();

        if (commandLiteral.trim()) {
          setCommandHistory((prev) => [...prev, commandLiteral]);
        }

        let inputtedCommand: Command = "" as Command;
        for (let i = 0; i < COMMAND_LIST.length; i++) {
          if (commandLiteral.trim().startsWith(`${COMMAND_LIST[i]} `)) {
            inputtedCommand = COMMAND_LIST[i];
            break;
          }
        }
        inputtedCommand =
          !inputtedCommand && commandLiteral.trim().length > 0
            ? (commandLiteral.trim().split(" ")[0] as Command)
            : inputtedCommand;

        let logsCopy = [...terminalLogs];
        const log: Log = { type: "command", literal: commandLiteral };
        logsCopy.push(log);

        if (inputtedCommand && !COMMAND_LIST.includes(inputtedCommand)) {
          const error: Log = {
            type: "error",
            literal: `cdgsh - command not found: ${inputtedCommand}`,
          };
          logsCopy.push(error);
        } else if (COMMAND_LIST.includes(inputtedCommand)) {
          const response = executeCommand(
            inputtedCommand,
            commandLiteral.trim().slice(inputtedCommand.length + 1)
          );
          response ? logsCopy.push(response) : (logsCopy = []);
        }

        setCommandLiteral("");
        setTerminalLogs(() => logsCopy);
      } else if (event.key === "ArrowUp") {
        event.preventDefault();
        if (commandHistoryIndex > 0) {
          setCommandLiteral(() => commandHistory[commandHistoryIndex - 1]);
          setCommandHistoryIndex((prev) => prev - 1);
        }
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        if (commandHistoryIndex <= commandHistory.length - 1) {
          commandHistoryIndex < commandHistory.length - 1
            ? setCommandLiteral(() => commandHistory[commandHistoryIndex + 1])
            : setCommandLiteral("");
          setCommandHistoryIndex((prev) => prev + 1);
        }
      }
    },
    [
      commandLiteral,
      terminalLogs,
      executeCommand,
      commandHistory,
      commandHistoryIndex,
    ]
  );

  useEffect(() => {
    setCommandHistoryIndex(commandHistory.length);
  }, [commandHistory.length]);

  useEffect(() => {
    setSessionTimeIn(() => new Date());
  }, []);

  return (
    <Outline $isSelected={isActive}>
      <Interface onClick={() => defaultCmdInput.current?.focus()}>
        <p>
          Session Timestamp: {sessionTimeIn?.toDateString().slice(0, -4)}{" "}
          {sessionTimeIn?.toTimeString().slice(0, 8)} on console
        </p>
        <p>Logged in as guest.</p>
        <p>Run `help` for usage instructions:</p>
        {terminalLogs.map((log, index) =>
          log.type === "command" ? (
            <CommandLog
              key={index}
              terminalPrompt={TERMINAL_PROMPT}
              commandLiteral={log.literal}
            />
          ) : log.type === "response" ? (
            <ResponseLog key={index} responseLiteral={log.literal} />
          ) : log.type === "error" ? (
            <ErrorLog key={index} errorLiteral={log.literal} />
          ) : null
        )}
        <div>
          <CmdInput
            ref={defaultCmdInput}
            value={`${" ".repeat(TERMINAL_PROMPT.length) + commandLiteral}`}
            onKeyDown={(e) => handleTerminalActions(e)}
            onChange={(e) =>
              setCommandLiteral(e.target.value.slice(TERMINAL_PROMPT.length))
            }
          />
          <NewLine>{TERMINAL_PROMPT}</NewLine>
        </div>
      </Interface>
    </Outline>
  );
};

export default Terminal;
