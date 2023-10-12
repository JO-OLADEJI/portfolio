import React, { useState, useEffect } from "react";
import styled from "styled-components";

// types
import { ContactMediumProps } from "../types";

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
`;

const CurrentInput = styled.p`
  position: relative;
  width: fit-content;
`;

const Caret = styled.span`
  position: absolute;
  bottom: 0;
  right: -1rem;
  width: 0.5rem;
  height: 1rem;
  background-color: black;
  border: 1px solid black;
`;

const Terminal = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [sessionTimeIn, setSessionTimeIn] = useState<Date>();

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
        <CurrentInput>
          guestuser@thecodeographer.com ~ %
          <Caret />
        </CurrentInput>
      </Interface>
    </Outline>
  );
};

export default Terminal;
