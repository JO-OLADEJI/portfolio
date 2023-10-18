import React from "react";
import styled from "styled-components";

// types
import { TerminalNode } from "../types";

const TerminalText = styled.p``;

const ErrorText = styled(TerminalText)`
  color: #C9140A;
`;

const ResponseText = styled(TerminalText)`
  color: #2b9028;
`;

interface CommandLogProps {
  terminalPrompt: string;
  commandLiteral: string | TerminalNode[];
}

export const CommandLog = ({
  terminalPrompt,
  commandLiteral,
}: CommandLogProps): JSX.Element => {
  if (typeof commandLiteral === "string") {
    return <TerminalText>{`${terminalPrompt} ${commandLiteral}`}</TerminalText>;
  }
  return (
    <>
      {commandLiteral.map((literal, index) => (
        <TerminalText key={index}>{literal}</TerminalText>
      ))}
    </>
  );
};

interface ResponseLogProps {
  responseLiteral: string | TerminalNode[];
}

export const ResponseLog = ({
  responseLiteral,
}: ResponseLogProps): JSX.Element => {
  if (typeof responseLiteral === "string") {
    return <ResponseText>{responseLiteral}</ResponseText>;
  }
  return (
    <>
      {responseLiteral.map((literal, index) => (
        <ResponseText key={index}>{literal}</ResponseText>
      ))}
    </>
  );
};

interface ErrorLogProps {
  errorLiteral: string | TerminalNode[];
}

export const ErrorLog = ({ errorLiteral }: ErrorLogProps): JSX.Element => {
  if (typeof errorLiteral === "string") {
    return <ErrorText>{errorLiteral}</ErrorText>;
  }
  return (
    <>
      {errorLiteral.map((literal, index) => (
        <ErrorText key={index}>{literal}</ErrorText>
      ))}
    </>
  );
};
