import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

// components
import { CommandLog, ResponseLog, ErrorLog } from "./Logs";

// types, constants, utils
import { Command, ContactMediumProps, Log, TerminalMessage } from "../types";
import { COMMAND_LIST, NEW_TERMINAL_MESSAGE, CMD_RULE } from "../constants";
import { getHelpResponse } from "../utils/terminal";

const Outline = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 3rem;
`;

const Interface = styled.div`
  margin: 3rem auto;
  width: 50rem;
  height: 30rem;
  border-radius: 0.5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  text-align: left;
  padding: 0.5rem;

  div {
    position: relative;
  }
`;

const CmdInput = styled.textarea`
  width: 100%;
  height: 1.35rem;
  border: none;
  color: green;
  caret-color: black;
  position: relative;
  resize: none;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const NewLine = styled.p`
  position: absolute;
  left: 0;
  top: 0;
`;

const Terminal = ({ isActive }: ContactMediumProps): JSX.Element => {
  const TERMINAL_PROMPT = "guestuser@thecodeographer.com ~ %";
  const [sessionTimeIn, setSessionTimeIn] = useState<Date>();
  const [command, setCommand] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<Log[]>([]);
  const [terminalFiles, setTerminalFiles] = useState<{
    [key: string]: TerminalMessage;
  }>({});
  const defaultCmdInput = useRef<HTMLTextAreaElement>(null);

  const getCommandResponse = useCallback(
    (command: Command, payload: string | undefined): Log | undefined => {
      const CMD_RESPONSE: Log = { type: "response", literal: "" };
      const CMD_ERROR: Log = { type: "error", literal: "" };

      if (!CMD_RULE[command].test(`${command} ${payload ?? ""}`))
        return CMD_ERROR;

      switch (command) {
        case "code":
          const storedFiles = { ...terminalFiles };
          if (payload) {
            if (terminalFiles[payload]) {
              CMD_RESPONSE.literal = `file "${payload}" already exists`;
            } else {
              storedFiles[payload] = NEW_TERMINAL_MESSAGE;
              setTerminalFiles(() => storedFiles);
              CMD_RESPONSE.literal = `created file: "${payload}"`;
            }
            return CMD_RESPONSE;
          }
          break;

        case "decode":
          // iterate over terminalFiles[$filename] and log out all keys and values
          break;
        case "memo config":
          break;
        case "graph":
          // make sure $filename exists
          // validate terminalFiles[$filename] with joi
          // hit api endpoint to send request
          break;
        case "help":
          CMD_RESPONSE.literal = getHelpResponse();
          return CMD_RESPONSE;
        case "clear":
          // console.log("clear command running");
          // setTerminalLogs(() => []);
          return;
        default:
          break;
      }

      return CMD_ERROR;
    },
    [terminalFiles]
  );

  const RETURN_keyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const inputtedWords: string[] = command.trim().split(" ");
        const inputtedCommand: Command = inputtedWords[0] as Command;

        let logsCopy = [...terminalLogs];
        const log: Log = { type: "command", literal: command };
        logsCopy.push(log);

        if (inputtedCommand && !COMMAND_LIST.includes(inputtedCommand)) {
          const error: Log = {
            type: "error",
            literal: `cdgsh - command not found: ${inputtedCommand}`,
          };
          logsCopy.push(error);
        } else if (COMMAND_LIST.includes(inputtedCommand)) {
          const response = getCommandResponse(
            inputtedCommand,
            command.trim().slice(inputtedCommand.length + 1)
          );
          response ? logsCopy.push(response) : (logsCopy = []);
        }

        setCommand("");
        setTerminalLogs(() => logsCopy);
      }
    },
    [command, terminalLogs, getCommandResponse]
  );

  useEffect(() => {
    document.addEventListener("keydown", RETURN_keyDown);
    return () => document.removeEventListener("keydown", RETURN_keyDown);
  }, [RETURN_keyDown]);

  useEffect(() => {
    setSessionTimeIn(() => new Date());
  }, []);

  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Terminal &gt;_</h1>
        <p>for nerds ;D</p>
      </div>

      <Interface>
        <p>
          Session login: {sessionTimeIn?.toDateString().slice(0, -4)}{" "}
          {sessionTimeIn?.toTimeString().slice(0, 8)} on console
        </p>
        <p>Logged in as guest.</p>
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
            value={" ".repeat(TERMINAL_PROMPT.length) + command}
            onChange={(e) =>
              setCommand(e.target.value.slice(TERMINAL_PROMPT.length))
            }
          />
          <NewLine>{TERMINAL_PROMPT}</NewLine>
        </div>
      </Interface>
    </Outline>
  );
};

export default Terminal;
