import React, { useState, useCallback } from "react";

// components
import Nav from "../components/Nav";
import arrowUp from "../assets/up-arrow.png";

// styles
import {
  Outline,
  DisplayScreen,
  ArrowButton,
  ArrowDown,
  ContentLayer,
} from "../styles/pages/portfolio";

const Portfolio = (): JSX.Element => {
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [projectIndex, setProjectIndex] = useState<number>(0);

  const handlePageHover = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
      setRotateX(xAxis);
      setRotateY(yAxis);
    },
    []
  );

  return (
    <Outline onMouseMove={handlePageHover}>
      <Nav page={"portfolio"} />
      <ContentLayer
        style={{
          transform: `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
        }}
      >
        <ArrowButton onClick={() => setProjectIndex((prev) => prev + 1)}>
          <img src={arrowUp} alt="arrow up" />
        </ArrowButton>
        <DisplayScreen>
          <h1>{Math.abs(projectIndex % 4)}</h1>
        </DisplayScreen>
        <ArrowDown onClick={() => setProjectIndex((prev) => prev - 1)}>
          <img src={arrowUp} alt="arrow down" />
        </ArrowDown>
      </ContentLayer>
    </Outline>
  );
};

export default Portfolio;
