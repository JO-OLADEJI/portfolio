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
  const [commandLiteral, setCommandLiteral] = useState<string>("");
  const [terminalLogs, setTerminalLogs] = useState<Log[]>([]);
  const [terminalFiles, setTerminalFiles] = useState<{
    [key: string]: TerminalMessage;
  }>({});
  const [activeFile, setActiveFile] = useState<string>("");
  const defaultCmdInput = useRef<HTMLTextAreaElement>(null);

  const getCommandResponse = useCallback(
    (command: Command, payload: string | undefined): Log | undefined => {
      const CMD_RESPONSE: Log = { type: "response", literal: "" };
      const CMD_ERROR: Log = {
        type: "error",
        literal: "invalid command syntax :/",
      };

      if (!CMD_RULE[command].test(`${command} ${payload ?? ""}`))
        return CMD_ERROR;

      switch (command) {
        case "code":
          const storedFiles = { ...terminalFiles };
          if (payload) {
            if (terminalFiles[payload]) {
              CMD_RESPONSE.literal = `file already exists. writing to '${payload}'`;
            } else {
              storedFiles[payload] = NEW_TERMINAL_MESSAGE;
              setTerminalFiles(() => storedFiles);
              CMD_RESPONSE.literal = `created file. writing to '${payload}'`;
            }
            setActiveFile(payload);
            return CMD_RESPONSE;
          }
          break;

        case "decode":
          if (payload) {
            CMD_RESPONSE.literal = !terminalFiles[payload]
              ? `file "${payload}" does not exist`
              : JSON.stringify(terminalFiles[payload]);
            return CMD_RESPONSE;
          }
          break;

        case "memo config":
          if (!activeFile) {
            CMD_RESPONSE.literal =
              "no files found. create a new file using the `code` command.";
            return CMD_RESPONSE;
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
          // make sure $filename exists
          // validate terminalFiles[$filename] with joi
          // hit api endpoint to send request
          break;

        case "help":
          if (payload) return CMD_ERROR;
          CMD_RESPONSE.literal = getHelpResponse();
          return CMD_RESPONSE;

        case "clear":
          if (payload) return CMD_ERROR;
          return;

        default:
          break;
      }

      return CMD_ERROR;
    },
    [terminalFiles, commandLiteral, activeFile]
  );

  const RETURN_keyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
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
          const response = getCommandResponse(
            inputtedCommand,
            commandLiteral.trim().slice(inputtedCommand.length + 1)
          );
          response ? logsCopy.push(response) : (logsCopy = []);
        }

        setCommandLiteral("");
        setTerminalLogs(() => logsCopy);
      }
    },
    [commandLiteral, terminalLogs, getCommandResponse]
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
            value={" ".repeat(TERMINAL_PROMPT.length) + commandLiteral}
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
