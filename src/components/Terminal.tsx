import React from "react";
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

const Terminal = ({ isActive }: ContactMediumProps): JSX.Element => {
  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Terminal &gt;_</h1>
        <p>for nerds ;D</p>
      </div>

      <Interface>
        <p>Last login: Fri Sep 29 06:42:17 on console</p>
        <p>You have new mail.</p>
        <p>guestuser@thecodeographer.com ~ %</p>
      </Interface>
    </Outline>
  );
};

export default Terminal;
