import React, { useState, useCallback, useContext, useEffect } from "react";
import { isMobile } from "react-device-detect";
import ReactGA from "react-ga";

// context
import { GlobalContext } from "../contexts/Global";

// components
import Nav from "../components/Nav";
import arrowUp from "../assets/up-arrow.png";
import RecordPlayer from "../components/RecordPlayer";

// hooks
import { useDeviceOrientation } from "../hooks/useDeviceOrientation";

// data
import projects from "../data/projects.json";

// utils
import { constrain } from "../utils";

// styles
import {
  Outline,
  Display,
  ArrowUp,
  ArrowDown,
  ContentLayer,
} from "../styles/pages/portfolio";

const Portfolio = (): JSX.Element => {
  ReactGA.pageview(window.location.pathname);
  const globalContext = useContext(GlobalContext);
  const { requestAccess, orientation } = useDeviceOrientation();
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

  const handleDeviceOrientation = useCallback(() => {
    if (!isMobile) return;
    const xRotation = constrain(((orientation?.beta ?? 45) - 45) / 3, -15, 15);
    const yRotation = constrain(
      -1 * ((orientation?.gamma ?? 0) / 1.5),
      -30,
      30
    );
    setRotateX(yRotation);
    setRotateY(xRotation);
  }, [orientation?.beta, orientation?.gamma]);

  useEffect(() => {
    const accessDeviceOrientation = async () => {
      await requestAccess();
    };
    accessDeviceOrientation();
  }, [requestAccess]);

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation, true);

    return () => {
      window.removeEventListener(
        "deviceorientation",
        handleDeviceOrientation,
        true
      );
    };
  }, [handleDeviceOrientation]);

  return (
    <Outline onMouseMove={(e) => !isMobile && handlePageHover(e)}>
      <Nav page={"portfolio"} />
      <ContentLayer
        $isMenuOpen={globalContext.state.isMenuOpen}
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
          <a
            href={projects[projectIndex].url}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              ReactGA.event({
                category: "Project Interaction",
                action: "View Project",
                label: projects[projectIndex].name,
              })
            }
          >
            <p className="old-font">View Project</p>
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
