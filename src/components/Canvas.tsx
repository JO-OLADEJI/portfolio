import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { isMobile } from "react-device-detect";

// types
import { ContactMediumProps } from "../types";

// assets
import expand from "../assets/enlarge.png";
import paperPlane from "../assets/paper-plane.png";
import loader from "../assets/loader.png";

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
  feint = "#f0f0f0",
}

// TODO: fix disappearing grid bug
const Canvas = ({ isActive }: ContactMediumProps): JSX.Element => {
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [selectedInk, setSelectedInk] = useState<InkColor>(InkColor.black);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [board2dContext, setBoard2dContext] =
    useState<CanvasRenderingContext2D | null>();
  const boardRef = useRef<HTMLCanvasElement>(null);

  const renderGrid = useCallback(() => {
    if (!board2dContext) return;
    board2dContext.lineWidth = 1;
    board2dContext.strokeStyle = InkColor.feint;

    for (let i = 20; i <= 1878; i += 21) {
      // vertical lines
      board2dContext.moveTo(i, 5);
      board2dContext.lineTo(i, 918);

      // horizontal lines
      board2dContext.moveTo(5, i);
      board2dContext.lineTo(1878, i);

      board2dContext.stroke();
    }
  }, [board2dContext]);

  // TODO: handle api async call state (loading)
  const handleCanvasSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!boardRef.current) return;

    const canvasImg = boardRef.current.toDataURL("image/png");
    try {
      setIsSubmitting(true);
      const res = await axios.post(
        `${process.env.REACT_APP_CDGR_API}/api/contact/canvas`,
        {
          imageData: canvasImg,
          src: "canvas",
        }
      );
      if (res.status === 200) {
        // TODO: display a sent status to the user
        board2dContext?.clearRect(
          0,
          0,
          boardRef.current.width,
          boardRef.current.height
        );
        renderGrid();
      } else {
        // TODO: handle API failed state
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const context = boardRef.current?.getContext("2d");
    if (!context) return;

    context.lineJoin = "round";
    context.lineCap = "round";
    context.strokeStyle = InkColor.black;
    setBoard2dContext(context);
  }, []);

  useEffect(() => {
    renderGrid();
  }, [renderGrid]);

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
        <Controls $isLoading={isSubmitting}>
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
          <button onClick={handleCanvasSubmit} disabled={isSubmitting}>
            {isSubmitting ? (
              <img src={loader} alt="loading" />
            ) : (
              <img src={isMobile ? expand : paperPlane} alt="send" />
            )}
          </button>
        </Controls>
      </BoardOutline>
    </Outline>
  );
};

export default Canvas;
