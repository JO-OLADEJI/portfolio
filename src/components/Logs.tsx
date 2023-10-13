import React from "react";
import styled from "styled-components";

// types
import { TerminalNode } from "../types";

const ResponseText = styled.p`
  color: red;
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
    return <p>{`[${terminalPrompt} ${commandLiteral}`}</p>;
  }
  return (
    <>
      {commandLiteral.map((literal, index) => (
        <p key={index}>{literal}</p>
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
    return <p>{errorLiteral}</p>;
  }
  return (
    <>
      {errorLiteral.map((literal, index) => (
        <p key={index}>{literal}</p>
      ))}
    </>
  );
};
