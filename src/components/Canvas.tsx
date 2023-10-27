import React from "react";
import { isMobile } from "react-device-detect";

// types
import { ContactMediumProps } from "../types";

// assets
import expand from "../assets/enlarge.png";
import paperPlane from "../assets/paper-plane.png";

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
            <img src={isMobile ? expand : paperPlane} alt="send" />
          </button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
