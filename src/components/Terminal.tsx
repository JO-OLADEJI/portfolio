import React from "react";
import styled from "styled-components";

const Outline = styled.div`
  text-align: center;
  margin-top: 5rem;
`;

const Interface = styled.div`
  margin: 1.5rem auto;
  width: 50rem;
  height: 30rem;
  border-radius: .5rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  text-align: left;
  padding: 0.5rem;
`;

const Terminal = (): JSX.Element => {
  return (
    <Outline>
      <div>
        <h1>Terminal</h1>
        <p>for nerds :D</p>
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
