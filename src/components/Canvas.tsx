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
  Ink,
} from "../styles/components/canvas";

enum InkColor {
  black = "#000000",
  grey = "#7b7b7b",
  light = "#cacaca",
}

const Canvas = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [selectedInk, setSelectedInk] = useState<InkColor>(InkColor.black);
  const boardRef = useRef<HTMLCanvasElement>(null);
  const [board2dContext, setBoard2dContext] =
    useState<CanvasRenderingContext2D | null>();

  useEffect(() => {
    const context = boardRef.current?.getContext("2d");
    if (!context) return;

    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = InkColor.black;
    setBoard2dContext(context);
  }, []);

  useEffect(() => {
    if (!board2dContext) return;
    board2dContext.strokeStyle = selectedInk;
  }, [selectedInk, board2dContext]);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    if (!board2dContext) return;
    const { offsetX, offsetY } = e.nativeEvent;
    board2dContext.lineWidth = 3;
    board2dContext.beginPath();
    board2dContext.moveTo(offsetX * 2, offsetY * 2);
    setIsDrawing(true);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ): void => {
    if (!board2dContext) return;
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    board2dContext.lineTo(offsetX * 2, offsetY * 2);
    board2dContext.stroke();
  };

  const handleMouseUp = (): void => {
    if (!board2dContext) return;
    board2dContext.closePath();
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
            <Ink
              style={{ backgroundColor: InkColor.black }}
              onClick={() => setSelectedInk(InkColor.black)}
              $isActive={selectedInk === InkColor.black}
            />
            <Ink
              style={{ backgroundColor: InkColor.grey }}
              onClick={() => setSelectedInk(InkColor.grey)}
              $isActive={selectedInk === InkColor.grey}
            />
            <Ink
              style={{ backgroundColor: InkColor.light }}
              onClick={() => setSelectedInk(InkColor.light)}
              $isActive={selectedInk === InkColor.light}
            />
          </div>
          <button onClick={(e) => e.preventDefault()}>
            <img src={isMobile ? expand : paperPlane} alt="send" />
          </button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
