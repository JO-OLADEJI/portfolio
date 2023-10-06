import React from "react";
import styled from "styled-components";

// types
import { ContactMediumProps } from "../types";

const Outline = styled.div<{ isSelected: boolean }>`
  display: ${({ isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 2rem;
`;

const BoardOutline = styled.div`
  margin: 1.5rem auto;
  width: 80rem;
  height: 50rem;
  border-radius: 2rem;
  background-color: black;
  position: relative;
`;

const Board = styled.div`
  width: 77rem;
  height: 47rem;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.3rem;
`;

const Controls = styled.div`
  width: 3rem;
  height: 45rem;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Ink = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin: 0.5rem auto;
  cursor: cell;
`;

const BlackInk = styled(Ink)`
  background-color: black;
`;

const RedInk = styled(Ink)`
  background-color: red;
`;

const Canvas = ({ isActive }: ContactMediumProps): JSX.Element => {
  return (
    <Outline isSelected={isActive}>
      <div>
        <h1>Canvas</h1>
        <p>for creatives :)</p>
      </div>

      <BoardOutline>
        <Board />
        <Controls>
          <div>
            <BlackInk />
            <RedInk />
          </div>
          <button>send</button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
