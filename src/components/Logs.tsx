import React from "react";

interface TerminalLogsProps {
  terminalPrompt: string;
  commandLiteral: string;
}

export const CommandLog = ({
  terminalPrompt,
  commandLiteral,
}: TerminalLogsProps): JSX.Element => {
  return <p>{`[${terminalPrompt} ${commandLiteral}`}</p>;
};

interface TerminalErrorLogProps {
  errorLiteral: string;
}

export const ErrorLog = ({
  errorLiteral,
}: TerminalErrorLogProps): JSX.Element => {
  return <p>{errorLiteral}</p>;
};
