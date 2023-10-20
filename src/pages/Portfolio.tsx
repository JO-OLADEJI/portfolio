import React from "react";

// components
import Nav from "../components/Nav";

// styles
import {
  Outline,
  ProjectsContainer,
  ProjectName,
  ProjectDetails,
} from "../styles/pages/portfolio";

const Portfolio = (): JSX.Element => {
  return (
    <Outline>
      <Nav page={"portfolio"} />

      <ProjectsContainer>
        <div />
        <div />
        <div />
        <ProjectName>Project Name</ProjectName>
      </ProjectsContainer>

      <ProjectDetails>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          blanditiis unde nisi temporibus ratione dolores commodi!
        </p>
        <p>spanner icon: React.js (Typescript)</p>
        <button>View Project</button>
      </ProjectDetails>
    </Outline>
  );
};

export default Portfolio;
