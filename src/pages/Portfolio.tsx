import React from "react";

// components
import Nav from "../components/Nav";

// types
import { Pages } from "../types";

const Portfolio = (): JSX.Element => {
  return (
    <div>
      <h1>Portfolio</h1>
      <Nav page={Pages.Portfolio} />
      <ul>
        <li>Skillset</li>
        <li>
          Link 3 projects 1. A web application 2. Video Editing reel 3. Mograph
          reel (of my practice projects)
        </li>
        <li>YouTube Channel & Latest Video</li>

        <li>Attach Downloadable CV (pdf and video)</li>
      </ul>
    </div>
  );
};

export default Portfolio;
