import React, { useState, useCallback, useContext } from "react";
import { isMobile } from "react-device-detect";

// context
import { GlobalContext } from "../contexts/Global";

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
  ArrowUp,
  ArrowDown,
  ContentLayer,
} from "../styles/pages/portfolio";

const Portfolio = (): JSX.Element => {
  const globalContext = useContext(GlobalContext);
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
        $isMenuOpen={globalContext.isMenuOpen}
        style={{
          transform: `rotateX(${rotateY}deg) rotateY(${rotateX}deg)`,
        }}
      >
        <ArrowUp
          $disabled={projectIndex === projects.length - 1}
          onClick={() =>
            setProjectIndex((prev) =>
              prev < projects.length - 1 ? prev + 1 : projects.length - 1
            )
          }
        >
          <img src={arrowUp} alt="arrow up" />
        </ArrowUp>
        <Display>
          <h1 className="old-font">{projects[projectIndex].name}</h1>
          <h3>{projects[projectIndex].descripton}</h3>
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
          $disabled={projectIndex === 0}
          onClick={() => setProjectIndex((prev) => (prev > 0 ? prev - 1 : 0))}
        >
          <img src={arrowUp} alt="arrow down" />
        </ArrowDown>
      </ContentLayer>

      {!isMobile && <RecordPlayer />}
    </Outline>
  );
};

export default Portfolio;
