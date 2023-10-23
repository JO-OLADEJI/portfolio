import React, { useState, useCallback } from "react";

// components
import Nav from "../components/Nav";
import arrowUp from "../assets/up-arrow.png";
import RecordPlayer from "../components/RecordPlayer";

// data
import projects from "../data/projects.json";

// styles
import {
  Outline,
  Display,
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
      const xAxis = (window.innerWidth / 2 - e.pageX) / 30;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 30;
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
        <ArrowButton
          onClick={() =>
            setProjectIndex((prev) =>
              prev < projects.length - 1 ? prev + 1 : projects.length - 1
            )
          }
        >
          <img src={arrowUp} alt="arrow up" />
        </ArrowButton>
        <Display>
          <h1 className="old-font">{projects[projectIndex].name}</h1>
          <h3>{projects[projectIndex].descripton}</h3>
          {/* <p>year: {projects[projectIndex].year}</p> */}
          <ul>
            <p>Tools</p>
            {projects[projectIndex].tools.map((tool, index) => (
              <span key={index}>{tool}</span>
            ))}
          </ul>
          <a href={projects[projectIndex].url} target="_blank" rel="noreferrer">
            <p className="old-font">Step Inside</p>
          </a>
        </Display>
        <ArrowDown
          onClick={() => setProjectIndex((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <img src={arrowUp} alt="arrow down" />
        </ArrowDown>
      </ContentLayer>

      <RecordPlayer />
    </Outline>
  );
};

export default Portfolio;
