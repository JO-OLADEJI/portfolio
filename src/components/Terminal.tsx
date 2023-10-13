import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";

// components
import { CommandLog, ErrorLog } from "./Logs";

// types, constants
import { Command, ContactMediumProps, Log } from "../types";
import { COMMAND_LIST } from "../constants";

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
  const defaultCmdInput = useRef<HTMLTextAreaElement>(null);

  const RETURN_keyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const inputtedWords: string[] = command.trim().split(" ");
        const inputtedCommand: Command = inputtedWords[0] as Command;

        const log: Log = { type: "command", literal: command };
        const logsCopy = [...terminalLogs];
        logsCopy.push(log);

        // case 1: check for empty string
        if (!inputtedCommand) {
          // pass
        }
        // case 2: check for invalid command
        else if (!COMMAND_LIST.includes(inputtedCommand)) {
          const error: Log = {
            type: "error",
            literal: `cdgsh - command not found: ${inputtedCommand}`,
          };
          logsCopy.push(error);
        }
        // case 3: valid command
        else if (COMMAND_LIST.includes(inputtedCommand)) {
          if (inputtedCommand === "clear" && inputtedWords.length === 1) {
            return setTerminalLogs(() => []);
          }
          // case 1: invalid payload: anything that doesn't conform to that rule is invalid
          // case 2: valid payload: define rule that checks for the validity of a command
        }

        setCommand("");
        setTerminalLogs(() => logsCopy);
      }
    },
    [command, terminalLogs]
  );

  useEffect(() => {
    setSessionTimeIn(() => new Date());
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", RETURN_keyDown);
    return () => document.removeEventListener("keydown", RETURN_keyDown);
  }, [RETURN_keyDown]);

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
