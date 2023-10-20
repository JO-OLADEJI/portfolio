import React from "react";

// types
import { ContactMediumProps } from "../types";

// assets
import signature from "../assets/signature.png";

// styles
import {
  Outline,
  BoardOutline,
  Board,
  Controls,
  DarkInk,
  GreyInk,
  LightInk,
} from "../styles/components/canvas";

const Canvas = ({ isActive }: ContactMediumProps): JSX.Element => {
  return (
    <Outline $isSelected={isActive}>
      <BoardOutline>
        <Board />
        <Controls>
          <div>
            <DarkInk />
            <GreyInk />
            <LightInk />
          </div>
          <button>
            <img src={signature} alt="send" />
          </button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
