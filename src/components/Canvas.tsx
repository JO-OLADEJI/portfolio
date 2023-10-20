import React from "react";
import styled from "styled-components";

// types
import { ContactMediumProps } from "../types";

const Outline = styled.div<{ $isSelected: boolean }>`
  display: ${({ $isSelected: isSelected }) => (isSelected ? "block" : "none")};
  text-align: center;
  margin-top: 3rem;
`;

const BoardOutline = styled.div`
  margin: 3rem auto;
  width: 70rem;
  height: 32rem;
  background-color: black;
  position: relative;
`;

const Board = styled.div`
  width: 69rem;
  height: 31rem;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Controls = styled.div`
  width: 3rem;
  height: 30rem;
  position: absolute;
  right: 1rem;
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

const DarkInk = styled(Ink)`
  background-color: #000000;
`;

const GreyInk = styled(Ink)`
  background-color: #7b7b7b;
`;

const LightInk = styled(Ink)`
  background-color: #cacaca;
`;

const Canvas = ({ isActive }: ContactMediumProps): JSX.Element => {
  return (
    <Outline $isSelected={isActive}>
      <div>
        <h1>Canvas</h1>
        <p>for creatives :)</p>
      </div>

      <BoardOutline>
        <Board />
        <Controls>
          <div>
            <DarkInk />
            <GreyInk />
            <LightInk />
          </div>
          <button>send</button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
