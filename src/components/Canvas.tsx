import React, { useEffect, useRef, useState } from "react";
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
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const boardRef = useRef<HTMLCanvasElement>(null);
  const [board2dContext, setBoard2dContext] =
    useState<CanvasRenderingContext2D | null>();

  useEffect(() => {
    const context = boardRef.current?.getContext("2d");
    if (!context) return;

    context.lineWidth = 3;
    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = "black";
    setBoard2dContext(context);
  }, []);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    const { offsetX, offsetY } = e.nativeEvent;
    board2dContext?.beginPath();
    board2dContext?.moveTo(offsetX * 2, offsetY * 2);
    setIsDrawing(true);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    board2dContext?.lineTo(offsetX * 2, offsetY * 2);
    board2dContext?.stroke();
  };

  const handleMouseUp = (): void => {
    board2dContext?.closePath();
    setIsDrawing(false);
  };

  return (
    <Outline $isSelected={isActive}>
      <BoardOutline>
        <Board
          ref={boardRef}
          width={
            boardRef.current?.clientWidth
              ? boardRef.current?.clientWidth * 2
              : 1878
          }
          height={
            boardRef.current?.clientHeight
              ? boardRef.current?.clientHeight * 2
              : 918
          }
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
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
